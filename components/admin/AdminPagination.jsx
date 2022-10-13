import React from "react";
import { useEffect, useState } from "react";
const AdminPagination = ({next, fetchNext, pagesTotal}) => {
  
  const quotes = "Quotes";
  //make an array of numbers from 1 to the total number of pages
  const pages = Array.from({length: pagesTotal}, (_, i) => i + 1);
  
  const [initialSlice, setInitialSlice] = useState(0);
  const [firstSlice, setFirstSlice] = useState(3);
  const [secondSlice, setSecondSlice] = useState(pages.length - 2);
  const [lastSlice, setLastSlice] = useState(pages.length);
  const [activePage, setActivePage] = useState(1);

  
  useEffect(() => {
 
    

    if(activePage >= 2 && activePage < pages.length - 3) {

      setInitialSlice(activePage - 2);
      setFirstSlice(activePage + 1);
      setSecondSlice(pages.length - 3);
      setLastSlice(pages.length - 1);
      debugger;
    }
  

  }, [activePage, pages, initialSlice, firstSlice, secondSlice, lastSlice]);

useEffect(() => {
  setInitialSlice(0);
      setFirstSlice(3);
      setSecondSlice(pages.length - 2);
      setLastSlice(pages.length);
      setActivePage(1);
      debugger
},[]);
  


  return (
    <div className="admin-pagination">
      <h3 className="admin-pagination-title">
        <div className="admin-pagination-title-item">
          {//loop over the quotes and show them
            [...quotes].map((quote, index) => (
              <div key={index} className="admin-pagination-title-word">{quote}</div>
              ))
          }

          {//show some s for pages from the start of the array page and then show  . . . and show last page
            pages.slice(0, 2).map((page, index) => (
              <div key={index} className="admin-pagination-title-word admin-pagination-title-item-color">s</div>
              ))
          }
          
           <div className="admin-pagination-title-word admin-pagination-title-item-color">...</div>
          
          {
            pages.slice(pages.length-2, pages.length).map((page, index) => (
              <div key={index} className="admin-pagination-title-word admin-pagination-title-item-color">s</div>
              ))

          }
        </div>

       
      </h3>
      <ul className="admin-pagination-count-list">
        {//loop over the pages and show the ones fro initialSlice to firstSlice
          pages.slice(initialSlice, firstSlice).map((page, index) => (
              <li className="admin-pagination-count-list-no" onClick={() => {setActivePage(page); fetchNext(page)}}>{page}</li>
            ))
        }
        {//show the ... if the current page is not the last page
          activePage !== lastSlice && <div className="admin-pagination-title-word admin-pagination-title-item-color">{'........'}</div>
        }
        {//show the last page
          pages.slice(secondSlice, lastSlice).map((page, index) => (
              <li className="admin-pagination-count-list-no" onClick={() => { setActivePage(page); fetchNext(page)}}>{page}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default React.memo(AdminPagination);
