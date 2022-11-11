import React from 'react';
import QuoteStatic from '../QuoteStatic';

const AdminUserLiked = ({ activeTab }) => {
  return (
    <div className="admin-user-liked">
      <section
        className={
          activeTab === 'tab1'
            ? 'user-liked-quotes show'
            : 'user-liked-quotes hide'
        }
      >
        <p className="user-liked-quotes-count">7 liked quotes</p>
        <div className="admin-user-liked-quotes">
          <QuoteStatic />
          <QuoteStatic />
          <QuoteStatic />
          <QuoteStatic />
          <QuoteStatic />
        </div>
      </section>
    </div>
  );
};

export default AdminUserLiked;
