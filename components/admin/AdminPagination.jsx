import React, { useEffect, useState } from 'react';
const AdminPagination = ({ next, fetchNext, pagesTotal, page }) => {
  const quotes = 'Quotes';
  //make an array of numbers from 1 to the total number of pages
  const pages = Array.from({ length: pagesTotal }, (_, i) => i + 1);

  const [initialSlice, setInitialSlice] = useState(0);
  const [firstSlice, setFirstSlice] = useState(3);
  const [secondSlice, setSecondSlice] = useState(pages.length - 2);
  const [lastSlice, setLastSlice] = useState(pages.length);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (activePage >= 2 && activePage < pages.length - 3) {
      setInitialSlice(activePage - 2);
      setFirstSlice(activePage + 1);
      setSecondSlice(pages.length - 3);
      setLastSlice(pages.length - 1);
      // 
    }
  }, [activePage, pages, initialSlice, firstSlice, secondSlice, lastSlice]);

  useEffect(() => {
    setInitialSlice(0);
    setFirstSlice(3);
    setSecondSlice(pagesTotal - 3);
    setLastSlice(pagesTotal - 1);
    setActivePage(1);
  }, [pagesTotal]);

  return (
    <div className="admin-pagination">
      <h3>
        <div>
          <ul className="admin-pagination-count-list">
            {
              //loop over the pages and show the ones fro initialSlice to firstSlice
              pages.slice(initialSlice, firstSlice).map((pageNo, index) => (
                <li
                  key={index}
                  className={page === pageNo ? "admin-pagination-count-list-no current" : "admin-pagination-count-list-no"}
                  onClick={() => {
                    setActivePage(pageNo);
                    fetchNext(pageNo);
                  }}
                >
                  {pageNo}
                </li>
              ))
            }
            
            {
              //show the ... if the current page is not the last page
              pages.length > 3 && <div className="admin-pagination-title-dots">...</div>
            }
            {
              //show the last page
              pages.length > 3 &&  pages.slice(secondSlice, lastSlice).map((pageNo, index) => (
                <li
                  key={index}
                  className={page === pageNo ? "admin-pagination-count-list-no current" : "admin-pagination-count-list-no"}
                  onClick={() => {
                    setActivePage(pageNo);
                    fetchNext(pageNo);
                  }}
                >
                  {pageNo}
                </li>
              ))
            }
          </ul>
        </div>
      </h3>
    </div>
  );
};

export default React.memo(AdminPagination);
