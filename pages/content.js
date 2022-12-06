import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PickedSelect from '../components/PickedSelect';
import QuoteCards from '../components/QuoteCards';
import TopicBrowse from '../components/TopicBrowse';
import { fetchDropdownOptions } from "../slices/admin.slice";
import { addMoreQuotes, getDropdownQuotesFromDB } from "../slices/quotes.slice";


export default function Content({tagName}) {
  
  // const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(20);
  const [quotes, setQuotes] = useState([]);
  const [isPicked, setIsPicked] = useState(false);
  const [user, setUser] = useState(true);

  const dispatch = useDispatch();
  const quotesReduxState = useSelector(state => state.quotes?.quotes);
  const dropdown = useSelector(state => state.admin.dropdown);
  //useffect to call fecQuotes
  
  useEffect(() => {
    if (tagName == "") {
      if (dropdown?.length === 0) {
        dispatch(fetchDropdownOptions());
      }
      if(dropdown.topic) {
        setIsPicked(dropdown.topic)
      }
  }
  }, [dispatch, dropdown]);

  useEffect(() => {
    if (quotesReduxState.length === 0 || picked === dropdown.topic) {
      dispatch(getDropdownQuotesFromDB({ topic: dropdown.topic, author: '', tag: '', page, pageSize }))
    } else if (picked === dropdown.author) {
      dispatch(getDropdownQuotesFromDB({ topic: '', author: dropdown.author, tag: '', page, pageSize }))
    } else if (picked === dropdown.tag) {
      dispatch(getDropdownQuotesFromDB({ topic: '', author: '', tag: dropdown.tag, page, pageSize }))
    }
  }, [picked]);

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
            <PickedSelect picked={picked} setPicked={setIsPicked} />
            <p className="home-main-left-header-text">
              {quotesReduxState?.count} results <b>{tagName ? `for ${tagName}` : ""}</b>
            </p>
          </div>
          <QuoteCards
            fetchNext={fetchNext}
            quotes={quotes}
            category={false}
            next={quotesReduxState?.next}
            picked={picked}
          />
        </section>
        <section className="home-main-right-content">
          <TopicBrowse user={user} />
        </section>
      </div>
    </div>
  );
}
