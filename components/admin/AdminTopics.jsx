import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../slices/categories.slice';
import AdminPagination from './AdminPagination';
const AdminTopics = () => {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const categories1 = useSelector(state => state.categories?.categories);

  const dispatch = useDispatch();

   //function to claculate total pages
  const CaluclatetotalPages = () => {
    let pages = Math.ceil(categories1.count / 30);
    setTotalPages(pages);
    
  };

  useEffect(() => {
    dispatch(fetchCategories({ page: 1, pageSize: 30, isAdmin: true }));
  }, []);
  
  useEffect(() => {
    setCategories(categories1.results);
    if(categories1.count){
      CaluclatetotalPages();
    }
  }, [categories, categories1]);

 

  function fetchNext(number) {
    // if(number) {
    //   dispatch(fetchCategories({page: number, pageSize: 30}));
    // } else {
    //   setPage(page + 1);
    //   dispatch(fetchCategories({page: page + 1, pageSize: 30}));
    // }
    setPage(number);
    dispatch(fetchCategories({page: number, pageSize: 30}));
  }
  return (
    <div className="admin-topics">
    <div className="container">
        <div className="admin-topics-content">
          <p className="admin-topics-text">{categories?.length} results</p>
          <section className="admin-topics-box">
            <ul className="admin-topic-browse-list">
              {categories?.map((category)=> 
                <Link href="/admin/admin-topics-page" passHref key={category?.id}>
                  <li className="admin-topic-browse-list-item" key={category?.id}> {category?.name}</li>
                </Link>
              )}
            </ul>
          </section>
          <AdminPagination pagesTotal={totalPages}  next={categories1.next} fetchNext={fetchNext} page={page} />
        </div>
      </div>
    </div>
  );
};

export default AdminTopics;
