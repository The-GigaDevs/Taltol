import QuoteCard from './QuoteCard';
import authService from '../services/auth.service';
import { useEffect, useState } from 'react';

const QuoteCards = () => {

  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(20);

  const getQuotes = () => {
    authService.getQuotes(page, pageSize).then((res) => {
      setQuotes(res.results);
    });
  };


  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="quote-cards">
      {quotes.map((quote) => (
        <QuoteCard key={quote._id} quote={quote} />
      ))}
    </div>
  );
};

export default QuoteCards;
