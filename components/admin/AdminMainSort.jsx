import React from 'react';
import { AdminAddQuoteModal } from './AdminAddQuoteModal';
import AdminSelectModal from './AdminSelectModal';

const AdminMainSort = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [addQuotesModal, setAddQuotesModal] = React.useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function openAddQuotesModal() {
    setAddQuotesModal(true);
  }

  function closeAddQuotesModal() {
    setAddQuotesModal(false);
  }

  return (
    <div className="admin-main-sort">
      <div className="container">
        <div className="admin-main-sort-content">
          <button className="main-sort-btn" onClick={openModal}>
            Add Sort Options
          </button>
          <button className="main-sort-btn" onClick={openAddQuotesModal}>
            Add a Quote
          </button>
        </div>
      </div>
      <AdminSelectModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <AdminAddQuoteModal
        addQuotesModal={addQuotesModal}
        closeAddQuotesModal={closeAddQuotesModal}
      />
    </div>
  );
};

export default AdminMainSort;
