import React, { useEffect } from "react";
import { CSVDownload } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../slices/admin.slice";
import AdminPagination from "./AdminPagination";
import AdminUsersCard from "./AdminUsersCard";
const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state?.admin?.allUsers);
  const [download, setDownload] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [csvData, setCsvData] = React.useState([]);
  let pageSize = 20

  useEffect(() => {
    dispatch(getAllUsers());
    calculatePages();
  }, []);

  function addToCSV(user) {
    if (csvData.includes(user)) {
      setCsvData(csvData.filter((item) => item !== user));
    } else {
      setCsvData([...csvData, user]);
    }
  }

  function calculatePages() {
    let pages = Math.ceil(users?.length / pageSize);
    if (users.length < pageSize){
      pages = 1
    }
    setPage(page);
    setTotalPages(pages);
  }

  function fetchNext(number) {
    if (number) {
      setPage(number);
    } else {
      setPage(page + 1);
    }
  }

  return (
    <div className="admin-users">
      <div className="admin-users-header">
        <p className="admin-quotes-left-text"> {users?.length} total results</p>
        {csvData.length > 0 && (
          <span
            className="admin-users-header-btn"
            onClick={() => {
              setDownload(true);
            }}
          >
            Export filtered data
          </span>
        )}
      </div>
      <div className="admin-user-cards">
        {users?.length > 0
          ? users
              .slice((page - 1) * pageSize, page * pageSize)
              .map((user) => (
                <AdminUsersCard
                  key={user?.id}
                  user={user}
                  addToCSV={addToCSV}
                  showDownloadButton={csvData.length > 0 ? true : false}
                />
              ))
          : "No users avaiable"}
      </div>
      <AdminPagination
        pagesTotal={totalPages}
        next={page + 1}
        fetchNext={fetchNext}
        page={page}
      />
      {download && <CSVDownload data={csvData} target="_blank" />}
    </div>
  );
};

export default AdminUsers;
