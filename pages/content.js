import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PickedSelect from '../components/PickedSelect';
import QuoteCards from '../components/QuoteCards';
import TopicBrowse from '../components/TopicBrowse';
import { addMoreQuotes, fetchQuotes } from "../slices/quotes.slice";


export default function Content({tagName}) {
  
  // const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(20);
  const [quotes, setQuotes] = useState([]);
  const [isPicked, setIsPicked] = useState(false);

  const dispatch = useDispatch();
  const quotesReduxState = useSelector(state => state.quotes?.quotes);

  //useffect to call fecQuotes
  
  useEffect(() => {
    if(tagName == ""){
    
      if(quotesReduxState.length === 0) {
        dispatch(fetchQuotes({page: 1, pageSize: 10}));
      }
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
          <div className="home-main-left-header">
            <PickedSelect picked={isPicked} setPicked={setIsPicked} />
            <p className="home-main-left-header-text">
              {quotesReduxState?.count} results <b>{tagName ? `for ${tagName}` : ""}</b>
            </p>
          </div>
          <QuoteCards
            fetchNext={fetchNext}
            quotes={quotes}
            category={false}
            next={quotesReduxState?.next}
            picked={isPicked}
          />
        </section>
        <section className="home-main-right-content">
          <TopicBrowse />
        </section>
      </div>
    </div>
  );
}
