import QuoteCard from './QuoteCard';
const QuoteCards = ({ quotes, fetchNext, category, next }) => {
  return (
    <>
      <div className="quote-cards">
        {quotes?.map((quote, index) => (
          <QuoteCard key={index} quote={quote} category={category} />
        ))}
      </div>
      <div>
        {next !== null && (
          <button
            className="filter-modal-footer-btn"
            onClick={() => fetchNext()}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default QuoteCards;
