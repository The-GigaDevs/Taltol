import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from '../../slices/auth.slice';
import { fetchQuotes } from '../../slices/quotes.slice';
import PickedSelect from '../PickedSelect';
import QuoteCards from '../QuoteCards';
import SortSelect from '../SortSelect';
import TopicBrowse from '../TopicBrowse';
import AdminPagination from './AdminPagination';

const AdminQuotes = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(50);
  const [quotes, setQuotes] = useState([]);
  const authRedux = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const quotesReduxState = useSelector(state => state.quotes?.quotes);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    dispatch(isUserLoggedIn());
  }, [authRedux?.isAuthenticated]);
  
  //useffect to call fecQuotes
  useEffect(() => {
   
      dispatch(fetchQuotes({page: 1, pageSize: 50}));
  }, []);

  useEffect(() => {
    setQuotes(quotesReduxState.results);
    if (quotesReduxState.count) {
      CaluclatetotalPages();
    }
  }, [quotesReduxState, quotes]);

  //function to claculate total pages
  const CaluclatetotalPages = () => {
    let pages = Math.ceil(quotesReduxState.count / 50);
    setTotalPages(pages);
  };

  function fetchNext(number) {
    if (number) {
      setPage(number);
      dispatch(fetchQuotes({ page: number, pageSize: pageSize }));
    } else {
      setPage(page + 1);
      dispatch(fetchQuotes({ page: page + 1, pageSize: pageSize }));
    }
  }

  return (
    <div className="admin-quotes">
      <div className="container">
        <div className="admin-quotes-content">
          <section className="admin-quotes-left-content">
            <p className="admin-quotes-left-text">{quotesReduxState?.results?.length} results</p>
            <div className="admin-quotes-left-content-grid">
              <PickedSelect />
              <SortSelect />
            </div>

            <QuoteCards
              fetchNext={fetchNext}
              quotes={quotes}
              category={false}
              next={quotesReduxState?.next}
              loadMore={false}
            />

            <AdminPagination
              pagesTotal={totalPages}
              next={quotes?.next}
              fetchNext={fetchNext}
              page={page}
            />
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
