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
  const quotes1 = useSelector(state => state.quotes.quotes);

  useEffect(() => {
    setQuotes(quotes1.results);
    console.log("quotes1", quotes);
  }, [quotes1, quotes]);

  // const getQuotes = () => {
  //   authService.getQuotes(page, pageSize).then((res) => {
  //     setQuotes([...quotes, ...res.results]);
  //   });
  // };

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
