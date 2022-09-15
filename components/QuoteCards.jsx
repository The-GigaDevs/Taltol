import QuoteCard from "./QuoteCard";
import authService from "../services/auth.service";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoreQuotes, fetchQuotes } from "../slices/quotes.slice";
const QuoteCards = () => {
  // const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(20);
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


  function fetchNext() {
    setPage(page + 1);
    console.log("Next page", page);
    dispatch(addMoreQuotes({page: page + 1, pageSize: pageSize}));
    
  }
  return (
    <>
      <div className="quote-cards">
        { quotes?.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
      <div>
        <button onClick={() => fetchNext()}>Load More</button>
      </div>
    </>
  );
};

export default QuoteCards;
