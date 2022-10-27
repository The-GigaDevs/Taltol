import randomAuthor from '../public/static/quote-card-author.svg';
import { useState } from 'react';

const UserHeader = ({ handleTab1, handleTab2, activeTab }) => {
  return (
    <div className="user-header">
      <div className="container">
        <div className="user-header-content">
          <div className="user-header-content-data">
            <div className="user-header-avatar">
              <img src={randomAuthor.src} alt="avatar" />
            </div>
            <div className="user-header-info">
              <h2 className="user-header-info-name">Adam Johns</h2>
              <span className="user-header-info-date">Since Feb, 2020</span>
              <span className="user-header-info-mail">adam@gmail.com</span>
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
  );
};

export default UserHeader;
