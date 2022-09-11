import { useEffect, useState, useContext } from "react";
import authService from "../services/auth.service";
import  quotesContext  from "../pages/context/quotes.context";


const TopicBrowse = () => {

  const [ loading, setLoading ] = useState(true);
  const [caterories, setCategories] = useState([]);
  const { quotes, setQuotes } = useContext(quotesContext);


  useEffect(() => {
    const fetchCategories = async () => {
      authService.getCategories().then(
        (response) => {
          console.log(response);
          setCategories(response.results);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      );
    };
    fetchCategories();
  }, []);

  function getCategoryQuotes () {

    authService.getQuotesByCategory(this.id, 1, 10).then(
      (response) => {
        console.log(response);
        setQuotes([...quotes, ...response.results]);
      }
    );
  }

  return (
    loading ? 'Loading ...' :
    <div className="topic-browse">
      <h3 className="topic-browse-title">Browse by topic</h3>
      <ul className="topic-browse-list" >
        {caterories.map((category, index) => (
          <li key={index} className="topic-browse-list-item">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicBrowse;
