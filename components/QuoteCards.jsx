import QuoteCard from './QuoteCard';
const QuoteCards = ({ quotes, fetchNext, category, next , loadMore = true, url="/"}) => {
  return (
    <>
      <div className="quote-cards">
        {quotes?.map((quote, index) => (
          <QuoteCard key={index} quote={quote} category={category} url={url}/>
        ))}
      </div>
      { loadMore && <div>
        {next !== null && (
          <button className="load-more-btn" onClick={() => fetchNext()}>
            Load More
          </button>
        )}
      </div>
}
    </>
  );
};

export default QuoteCards;
