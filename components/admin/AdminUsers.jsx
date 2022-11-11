import React from 'react';
import AdminUsersCard from './AdminUsersCard';

const AdminUsers = () => {
  return (
    <div className="admin-users">
      <div className="admin-users-header">
        <p className="admin-quotes-left-text">857 results</p>
        <span className="admin-users-header-btn">Export filtered data</span>
      </div>
      <div className="admin-user-cards">
        <AdminUsersCard />
        <AdminUsersCard />
        <AdminUsersCard />
        <AdminUsersCard />
        <AdminUsersCard />
        <AdminUsersCard />
      </div>
    </div>
  );
};

export default AdminUsers;
