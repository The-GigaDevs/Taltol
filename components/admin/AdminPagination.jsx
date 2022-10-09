const AdminPagination = () => {
  return (
    <div className="admin-pagination">
      <h3 className="admin-pagination-title">
        <div className="admin-pagination-title-item">
          <div className="admin-pagination-title-word">Q</div>
          <div className="admin-pagination-title-word">u</div>
          <div className="admin-pagination-title-word">o</div>
          <div className="admin-pagination-title-word">t</div>
          <div className="admin-pagination-title-word">e</div>
          <div className="admin-pagination-title-word">s</div>
          <div className="admin-pagination-title-word admin-pagination-title-item-color">
            s
          </div>
          <div className="admin-pagination-title-word admin-pagination-title-item-color">
            s
          </div>
        </div>
        <div className="admin-pagination-title-item admin-pagination-title-item-color">
          <div className="admin-pagination-title-word">s</div>
          <div className="admin-pagination-title-word">s</div>
        </div>
      </h3>
      <ul className="admin-pagination-count-list">
        <li className="admin-pagination-count-list-no current">1</li>
        <li className="admin-pagination-count-list-no">2</li>
        <li className="admin-pagination-count-list-no">3</li>
        <li className="admin-pagination-count-list-no">...</li>
        <li className="admin-pagination-count-list-no">11</li>
        <li className="admin-pagination-count-list-no">12</li>
      </ul>
    </div>
  );
};

export default AdminPagination;
