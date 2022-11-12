import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../slices/admin.slice';
import AdminUsersCard from './AdminUsersCard';

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state?.admin?.allUsers);
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, [])

  return (
    <div className="admin-users">
      <div className="admin-users-header">
        <p className="admin-quotes-left-text">857 results</p>
        <span className="admin-users-header-btn">Export filtered data</span>
      </div>
      <div className="admin-user-cards">
        {users?.length > 0 ?
          users.map(user => <AdminUsersCard key={user?.id} user={user} />) 
        : 'No users avaiable'}
        
      </div>
    </div>
  );
};

export default AdminUsers;
