const AdminPagination = ({next, fetchNext}) => {
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
          {next &&
            (
              <div className="admin-pagination-title-word admin-pagination-title-item-color">
                s
              </div>
            )}
          <div className="admin-pagination-title-word admin-pagination-title-item-color">
            s
          </div>
        </div>
        <div className="admin-pagination-title-item admin-pagination-title-item-color">
          <div className="admin-pagination-title-word" onClick={() => fetchNext()}>s</div>
          <div className="admin-pagination-title-word" onClick={() => fetchNext()}>s</div>
        </div>
      </h3>
      <ul className="admin-pagination-count-list">
        <li className="admin-pagination-count-list-no current" onClick={() => fetchNext(1)}>1</li>
        {next && 
          (
            <>
              <li className="admin-pagination-count-list-no" onClick={() => fetchNext(2)}>2</li>
              <li className="admin-pagination-count-list-no" onClick={() => fetchNext(3)}>3</li>
              <li className="admin-pagination-count-list-no">...</li>
              <li className="admin-pagination-count-list-no" onClick={() => fetchNext(11)}>11</li>
              <li className="admin-pagination-count-list-no" onClick={() => fetchNext(12)}>12</li>
            </>
        )}
      </ul>
    </div>
  );
};

export default AdminPagination;
