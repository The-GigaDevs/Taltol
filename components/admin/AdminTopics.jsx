import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../slices/categories.slice';
import AdminPagination from './AdminPagination';
const AdminTopics = () => {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const categories1 = useSelector(state => state.categories?.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories({page: 1, pageSize: 30}));
  }, []);
  useEffect(() => {
    setCategories(categories1.results);
  }, [categories, categories1]);

  function fetchNext(number) {
    if(number) {
      dispatch(fetchCategories({page: number, pageSize: 30}));
    } else {
      setPage(page + 1);
      dispatch(fetchCategories({page: page + 1, pageSize: 30}));
    }
  }
  return (
    <div className="admin-topics">
      <div className="container">
        <div className="admin-topics-content">
          <p className="admin-topics-text">857 results</p>
          <section className="admin-topics-box">
            <ul className="admin-topic-browse-list">
              {categories?.map((category)=> 
                <li className="admin-topic-browse-list-item" key={category?.id}> {category?.name}</li>
              )}
            </ul>
          </section>
          <AdminPagination  next={categories1.next} fetchNext={fetchNext} />
        </div>
      </div>
    </div>
  );
};

export default AdminTopics;
