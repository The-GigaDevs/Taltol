import React from 'react';
import { useSelector } from 'react-redux';
import randomAuthor from '../..//public/static/quote-card-author.svg';
import AdminGoBack from './AdminGoBack';
const AdminUserHeader = ({ handleTab1, handleTab2, activeTab }) => {
  
  const user = useSelector(state => state?.admin?.selectedUser);

  return (
    <div className="admin-user-header">
      <AdminGoBack />
      <div className="user-header">
        <div className="container">
          <div className="user-header-content">
            <div className="user-header-content-data">
              <div className="user-header-avatar">
                <img src={user?.social_image_url ? user.social_image_url : randomAuthor.src } alt="avatar" />
              </div>
              <div className="user-header-info">
                <h2 className="user-header-info-name">{user?.first_name + user?.last_name}</h2>
                <span className="user-header-info-date">{user?.date_joined}</span>
                <span className="user-header-info-mail">{user?.email}</span>
              </div>
            </div>
            <div className="user-header-content-actions">
              <span
                className={
                  activeTab === 'tab1'
                    ? 'user-header-content-actions-btn active'
                    : 'user-header-content-actions-btn'
                }
                onClick={handleTab1}
              >
                Liked quotes
              </span>
              <span
                className={
                  activeTab === 'tab2'
                    ? 'user-header-content-actions-btn active'
                    : 'user-header-content-actions-btn'
                }
                onClick={handleTab2}
              >
                Saved collections
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserHeader;
