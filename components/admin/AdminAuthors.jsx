import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../../slices/authors.slice";             
import AdminPagination from "./AdminPagination";
const AdminAuthors = () => {
    const [authors, setAuthors] = useState([]);
    const [page, setPage] = useState(1);
    const authors1 = useSelector(state => state.authors?.authors);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAuthors({ page: 1, pageSize: 30 }));
    }
    , []);
    useEffect(() => {
        setAuthors(authors1.results);
    }
    , [authors, authors1]);
    function fetchNext(number) {
        if (number) {
            dispatch(fetchAuthors({ page: number, pageSize: 30 }));
        } else {
            setPage(page + 1);
            dispatch(fecth(page + 1));
        }
    }
    return (
        <div className="admin-topics">
            <div className="container">
                <div className="admin-topics-content">
                    <p className="admin-topics-text">857 results</p>
                    <section className="admin-topics-box">
                        <ul className="admin-topic-browse-list">
                            {authors?.map((author) =>
                                <li className="admin-topic-browse-list-item" key={author?.id}> {author?.name}</li>
                            )}
                        </ul>
                    </section>
                    <AdminPagination next={authors1.next} fetchNext={fetchNext} />
                </div>
            </div>
        </div>
    );
};

export default AdminAuthors;