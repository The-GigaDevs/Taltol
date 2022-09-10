import QuoteCard from './QuoteCard';
import authService from '../services/auth.service';
import { useEffect, useState, useContext } from 'react';
import QuotesContext from '../pages/context/quotes.context';

const QuoteCards = () => {

  // const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(20);
  const { quotes, setQuotes } = useContext(QuotesContext);

  const getQuotes = () => {
    authService.getQuotes(page, pageSize).then((res) => {
      setQuotes([...quotes, ...res.results]);
    });
  };

  function fetchNext() {
    setPage(page + 1);
    getQuotes()
  }
  
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
        <div className="quote-cards">
      {quotes.map((quote) => (
        <QuoteCard key={quote._id} quote={quote} />
      ))}
    </div>
    <div>
      <button onClick={() => fetchNext()}>Load More</button>
    </div>
    
    </>
  );
};

export default QuoteCards;
