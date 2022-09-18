import QuoteCard from './QuoteCard';
const QuoteCards = ({ quotes, fetchNext }) => {
  return (
    <>
      <div className="quote-cards">
        {quotes?.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
      <div>
        <button className="load-more-btn" onClick={() => fetchNext()}>
          Load More
        </button>
      </div>
    </>
  );
};

export default QuoteCards;
