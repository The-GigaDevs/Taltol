import React from 'react';
import AdminAuthorDescriptionAvatar from './AdminAuthorDescriptionAvatar';
const AdminUsersCards = () => {
  return (
    <div className="admin-user-cards">
      <div className="admin-user-card">
        <div className="admin-user-card-header">
          <div className="admin-user-card-header-info">
            <img src={AdminAuthorDescriptionAvatar} alt="User" />
            <div className="admin-user-card-header-info-item">
              <h3 lassName="admin-user-card-header-info-name">John Doe</h3>
              <span className="admin-user-card-header-info-date">
                Since Oct 2022
              </span>
            </div>
          </div>
          <div className="admin-user-card-header-select">
            <div className="admin-user-card-header-select-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
                  fill="#FF3294"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="admin-user-card-body">
          <div className="admin-user-card-body-info">
            <span className="dmin-user-card-body-info-digit">3</span>
            <span className="dmin-user-card-body-info-digit">monthly</span>
          </div>
          <div className="admin-user-card-body-info">
            <span className="dmin-user-card-body-info-digit">1</span>
            <span className="dmin-user-card-body-info-digit">last 30</span>
          </div>
          <div className="admin-user-card-body-info">
            <span className="dmin-user-card-body-info-digit">20</span>
            <span className="dmin-user-card-body-info-digit">minutes</span>
          </div>
          <div className="admin-user-card-body-info">
            <span className="dmin-user-card-body-info-digit">7</span>
            <span className="dmin-user-card-body-info-digit">collections</span>
          </div>
          <div className="admin-user-card-body-info">
            <span className="dmin-user-card-body-info-digit">20</span>
            <span className="dmin-user-card-body-info-digit">likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersCards;
