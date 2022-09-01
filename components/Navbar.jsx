import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link href="#">
            <a className="navbar-brand"></a>
          </Link>
          <div className="navbar-search">
            <div className="navbar-search-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                  fill="#BDBDBD"
                />
              </svg>
              <input type="text" className="navbar-search-field" />
            </div>
            <div className="navbar-filters">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7Z"
                  stroke="#333333"
                />
                <path
                  d="M14 16C12.3431 16 11 14.6569 11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13C17 14.6569 15.6569 16 14 16Z"
                  stroke="#333333"
                />
                <path d="M6.99685 4H17M11.0031 13H1" stroke="#333333" />
              </svg>
              <span className="navbar-filters-text">Filter</span>
              <span className="navbar-filters-count">3</span>
            </div>
          </div>
          <div className="navbar-profile">
            <span className="navbar-profile-avatar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
