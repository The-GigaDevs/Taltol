import React, { useEffect } from 'react';
import { CSVDownload } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../slices/admin.slice';
import AdminUsersCard from './AdminUsersCard';
const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state?.admin?.allUsers);
  const [download, setDownload] = React.useState(false);

  const [csvData, setCsvData] = React.useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [])

  function addToCSV(user) {
    setCsvData([...csvData, user]);
  }
  return (
    <div className="admin-users">
      <div className="admin-users-header">
        <p className="admin-quotes-left-text"> {users?.length} results</p>
        {csvData.length > 0 && <span className="admin-users-header-btn" onClick={() => {setDownload(true)}}>Export filtered data</span>}
      </div>
      <div className="admin-user-cards">
        {users?.length > 0 ?
          users.map(user => <AdminUsersCard key={user?.id} user={user} addToCSV={addToCSV} showDownloadButton={csvData.length > 0 ? true : false}/>) 
        : 'No users avaiable'}
        
      </div>
      { download && <CSVDownload data={csvData} target="_blank"/>}
      </div>
  );
};

export default AdminUsers;
