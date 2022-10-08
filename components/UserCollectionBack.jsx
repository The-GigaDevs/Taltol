const UserCollectionBack = ({showCollection, setShowCollection}) => {

  return (

    <div className="user-collection-back" onClick={() => {setShowCollection(!showCollection)}}>
      <div className="container">
        <button className="user-collection-back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M10 1.88L3.81916 8L10 14.12L8.09717 16L0 8L8.09717 0L10 1.88Z"
              fill="#333333"
            />
          </svg>
          <span className="user-collection-back-btn-text">Go back</span>
        </button>
      </div>
    </div>
  );
};

export default UserCollectionBack;
