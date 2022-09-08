import randomAuthor from "../public/static/quotes-card-author.jpg";
import authService from "../services/auth.service";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
const QuotesCards = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const fetchQuotes = async () => {
      authService.getQuotes(page, pageSize).then(
        (response) => {
          console.log(response);
          setQuotes(response.results);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    };
    fetchQuotes();
  }, [page, pageSize]);

  return (
    <div className="quotes-cards">
      {quotes.map((quote, index) => (
        <div className="quotes-card" key={index}>
          <div className="quotes-card-likes">
            <span className="quotes-card-likes-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M8 14.9333L6.84 13.8591C2.72 10.0586 0 7.55212 0 4.47593C0 1.96941 1.936 0 4.4 0C5.792 0 7.128 0.659183 8 1.70085C8.872 0.659183 10.208 0 11.6 0C14.064 0 16 1.96941 16 4.47593C16 7.55212 13.28 10.0586 9.16 13.8672L8 14.9333Z"
                  fill="#F2F2F2"
                />
              </svg>
            </span>
            <span className="quotes-card-likes-count">{quote.quote_liked}</span>
          </div>
          <h4 className="quotes-card-text">{quote.text}</h4>
          <div className="quotes-card-author">
            <img
              src={randomAuthor.src}
              alt="Author Avatar"
              className="quotes-card-author-avatar"
            />
            <p className="quotes-card-author-name">{quote.author.name}</p>
          </div>
        </div>
      ))}

    </div>
  );
};
export default QuotesCards;
