import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTags } from '../../slices/tags.slice';
import AdminPagination from "./AdminPagination";

const AdminTags = () => {
    const [tags, setTags] = useState([]);
    const [page, setPage] = useState(1);
    const tags1 = useSelector(state => state.tags?.tags);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTags({ page: 1, pageSize: 30 }));
    }, []);
    useEffect(() => {
        setTags(tags1.results);
    }
    , [tags, tags1]);
    function fetchNext(number) {
        if (number) {
            dispatch(fetchTags({ page: number, pageSize: 30 }));
        } else {
            setPage(page + 1);
            dispatch(fetchTags(page +1));
        }
    }
    return (
        <div className="admin-topics">
            <div className="container">
                <div className="admin-topics-content">
                    <p className="admin-topics-text">857 results</p>
                    <section className="admin-topics-box">
                        <ul className="admin-topic-browse-list">
                            {tags?.map((tag) =>
                                <li className="admin-topic-browse-list-item" key={tag?.id}> {tag?.text}</li>
                            )}
                        </ul>
                    </section>
                    <AdminPagination next={tags1.next} fetchNext={fetchNext} />
                </div>
            </div>
        </div>
    );
};

export default AdminTags;