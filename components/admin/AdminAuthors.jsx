import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../../slices/authors.slice";             
import AdminPagination from "./AdminPagination";
const AdminAuthors = () => {
    const [authors, setAuthors] = useState([]);
    const [page, setPage] = useState(1);
    const authors1 = useSelector(state => state.authors?.authors);
    const dispatch = useDispatch();
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        dispatch(fetchAuthors({ page: 1, pageSize: 50, isAdmin: true }));
    }
    , []);
    useEffect(() => {
        setAuthors(authors1.results);
        if (authors1.count) {
            CaluclatetotalPages();
        }
    }
    , [authors, authors1]);


    function CaluclatetotalPages() {
        let pages = Math.ceil(authors1.count / 50);
        setTotalPages(pages);
    }



    function fetchNext(number) {
        if (number) {
            setPage(number);
            dispatch(fetchAuthors({ page: number, pageSize: 50 }));
        } else {
            setPage(page + 1);
            dispatch(fetchAuthors(page + 1));
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
                    <AdminPagination pagesTotal={totalPages} next={authors1.next} fetchNext={fetchNext} page={page} />
                </div>
            </div>
        </div>
    );
};

export default AdminAuthors;