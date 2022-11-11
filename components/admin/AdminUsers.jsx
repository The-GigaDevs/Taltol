import React from 'react';
import AdminUsersCards from './AdminUsersCards';
import AdminPagination from './AdminPagination';

const AdminUsers = () => {
  return (
    <div className="admin-users">
      <div className="admin-users-header">
        <p className="admin-quotes-left-text">857 results</p>
        <span className="dmin-users-header-btn">Export filtered data</span>
      </div>
      <AdminUsersCards />
      <AdminUsersCards />
      <AdminUsersCards />
      <AdminUsersCards />
      <AdminUsersCards />
      <AdminUsersCards />
      <AdminPagination />
    </div>
  );
};

export default AdminUsers;
