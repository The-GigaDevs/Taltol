import QuoteCard from "./QuoteCard";
const QuoteCards = ({quotes, fetchNext, category }) => {
  return (
    <>
      <div className="quote-cards">
        {quotes?.map((quote, index) => (
          <QuoteCard key={index} quote={quote} category={category} />
        ))}
      </div>
      <div>
        <button className="filter-modal-footer-btn" onClick={() => fetchNext()}>Load More</button>
      </div>
    </>
  );
};

export default QuoteCards;
