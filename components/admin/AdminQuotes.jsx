import PickedSelect from '../PickedSelect';
import QuoteStatic from '../QuoteStatic';
import TopicBrowse from '../TopicBrowse';
import SortSelect from '../SortSelect';
import AdminPagination from './AdminPagination';

const AdminQuotes = () => {
  return (
    <div className="admin-quotes">
      <div className="container">
        <div className="admin-quotes-content">
          <section className="admin-quotes-left-content">
            <p className="admin-quotes-left-text">857 results</p>
            <div className="admin-quotes-left-content-grid">
              <PickedSelect />
              <SortSelect />
            </div>
            <div className="admin-quotes-cards">
              <QuoteStatic />
              <QuoteStatic />
              <QuoteStatic />
              <QuoteStatic />
              <QuoteStatic />
              <QuoteStatic />
            </div>
            <AdminPagination />
          </section>
          <section className="admin-quotes-right-content">
            <TopicBrowse />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminQuotes;
