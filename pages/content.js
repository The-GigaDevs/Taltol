import React from "react";
import PickedSelect from '../components/PickedSelect';
import QuoteCards from '../components/QuoteCards';
import TopicBrowse from '../components/TopicBrowse';
import authService from "../services/auth.service";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoreQuotes, fetchQuotes } from "../slices/quotes.slice";


export default function Content() {
  
  // const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(20);
  const [quotes, setQuotes] = useState([]);

  const dispatch = useDispatch();
  const quotesReduxState = useSelector(state => state.quotes?.quotes);

  //useffect to call fecQuotes
  
  useEffect(() => {
    
    if(quotesReduxState.length === 0) {
      dispatch(fetchQuotes());
    }
  }, [dispatch, quotesReduxState]);


  useEffect(() => {
    setQuotes(quotesReduxState.results);
  }, [quotesReduxState, quotes]);


  function fetchNext() {
    setPage(page + 1);
    // //console.log("Next page", page);
    dispatch(addMoreQuotes({page: page + 1, pageSize: pageSize}));
    
  }

  return (
    <div className="container">
      <div className="home-main-content">
        <section className="home-main-left-content">
          <PickedSelect />
          <QuoteCards fetchNext={fetchNext} quotes={quotes} category={false} next ={quotesReduxState?.next} />
        </section>
        <section className="home-main-right-content">
          <TopicBrowse />
        </section>
      </div>
    </div>
  );
}
