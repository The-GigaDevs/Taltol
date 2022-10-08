import AdminSelect from './AdminSelect';

const AdminMainSort = () => {
  return (
    <div className="admin-main-sort">
      <div className="container">
        <div className="admin-main-sort-content">
          <h4 className="admin-main-sort-title">Main Sort:</h4>
          <div className="admin-main-sort-box">
            <div className="admin-main-sort-category">
              <p className="admin-main-sort-category-title">Default</p>
              <AdminSelect />
            </div>
            <div className="admin-main-sort-category">
              <p className="admin-main-sort-category-title">Second Option</p>
              <AdminSelect />
            </div>
            <div className="admin-main-sort-category">
              <p className="admin-main-sort-category-title">Third Option</p>
              <AdminSelect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMainSort;
