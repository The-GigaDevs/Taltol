import QuoteCard from "./QuoteCard";
const QuoteCards = ({quotes, fetchNext }) => {

  return (
    <>
      <div className="quote-cards">
        { quotes?.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
      <div>
        
        <button className="filter-modal-footer-btn" onClick={() => fetchNext()}>Load More</button>
      </div>
    </>
  );
};

export default QuoteCards;
