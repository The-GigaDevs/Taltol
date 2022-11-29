import Link from 'next/link';
import React, { useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');
const RestrictiveModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height: '95%',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '100',
  },
};

const TopicsModal = props => {
  return (
    <>
      <Modal
        isOpen={props.showModal}
        onRequestClose={() => props.setShowModal}
        style={RestrictiveModalStyles}
      >
        <div className="filter-modal">
          <div className="filter-modal-header">
            <span
              className="filter-modal-close"
              onClick={() => props.setShowModal(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L1.70711 15.7071C1.31658 16.0976 0.683417 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893Z"
                  fill="#000"
                />
                <path
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  fill="#000"
                />
              </svg>
            </span>
            <h3 className="filter-modal-header-title">All Topics</h3>
            <span></span>
          </div>

          <div className="topic-modal-browse-list">
            {props.categories?.map((category, index) => {
              return (
                <Link
                  key={category.id}
                  passHref
                  href={{
                    pathname: `/category/${encodeURIComponent(category.id)}`,
                    query: { name: category.name },
                  }}
                  as={`/category/${encodeURIComponent(category.id)}`}
                >
                  <div
                    key={index}
                    className="topic-browse-list-item"
                    onClick={props.setShowModal}
                  >
                    {`${category.name} Quotes`}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default React.memo(TopicsModal);
