import { useEffect, useState, useContext } from "react";
import authService from "../services/auth.service";
import  quotesContext  from "../pages/context/quotes.context";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../slices/categories.slice";


const TopicBrowse = () => {

  const [ loading, setLoading ] = useState(true);
  const [categories, setCategories] = useState([]);
  const { quotes, setQuotes } = useContext(quotesContext);

  const dispatch = useDispatch();
  const categories1 = useSelector(state => state.categories?.categories);

  useEffect(() => {
    dispatch(fetchCategories());

  }, [])

  useEffect(() => {
    setCategories(categories1.results);
    setLoading(false);
  }, [categories, categories1]);

  return (
    loading ? 'Loading ...' :
    <div className="topic-browse">
      <h3 className="topic-browse-title">Browse by topic</h3>
      <ul className="topic-browse-list" >
        {categories?.map((category, index) => (
          <li key={index} className="topic-browse-list-item">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicBrowse;
