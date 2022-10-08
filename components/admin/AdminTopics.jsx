import AdminPagination from './AdminPagination';
const AdminTopics = () => {
  return (
    <div className="admin-topics">
      <div className="container">
        <div className="admin-topics-content">
          <p className="admin-topics-text">857 results</p>
          <section className="admin-topics-box">
            <ul className="admin-topic-browse-list">
              <li className="admin-topic-browse-list-item">Humor Quotes</li>
              <li className="admin-topic-browse-list-item">Love Quotes</li>
              <li className="admin-topic-browse-list-item">Life Quotes</li>
              <li className="admin-topic-browse-list-item">
                Friendship Quotes
              </li>
              <li className="admin-topic-browse-list-item">
                Motivational Quotes
              </li>
              <li className="admin-topic-browse-list-item">
                Inspirational Quotes
              </li>
              <li className="admin-topic-browse-list-item">Success Quotes</li>
              <li className="admin-topic-browse-list-item">Attitude Quotes</li>
              <li className="admin-topic-browse-list-item">Positive Quotes</li>
              <li className="admin-topic-browse-list-item">Trust Quotes</li>
              <li className="admin-topic-browse-list-item">
                Relationship Quotes
              </li>
            </ul>
          </section>
          <AdminPagination />
        </div>
      </div>
    </div>
  );
};

export default AdminTopics;
