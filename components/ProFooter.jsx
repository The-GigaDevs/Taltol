import Link from 'next/link';

const ProFooter = () => {
  return (
    <footer className="pro-footer">
      <div className="container">
        <div className="pro-footer-content">
          <div className="pro-footer-brand">
            <h1 className="pro-footer-brand-title">taltol</h1>
            <p className="pro-footer-brand-text">
              We love quotes and we want to provide the best user experience for
              quotes.{' '}
              <Link href="#">
                <a className="pro-footer-brand-text-link">Suggest Anything</a>
              </Link>
            </p>
          </div>

          <button className="pro-footer-upgrade-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8946 3.78925C11.5501 3.46089 12 2.78299 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 2.78299 8.44994 3.46089 9.10538 3.78925L7 8L3.85745 6.74298C3.94941 6.51328 4 6.26255 4 6C4 4.89543 3.10457 4 2 4C0.89543 4 0 4.89543 0 6C0 7.10457 0.89543 8 2 8C2.11335 8 2.2245 7.99057 2.3327 7.97245L3.4 14.3C3.5 15.3 4.4 16 5.3 16H14.6C15.6 16 16.4 15.3 16.6 14.3L17.6673 7.97245C17.7755 7.99057 17.8867 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 6.26255 16.0506 6.51328 16.1426 6.74298L13 8L10.8946 3.78925Z"
                fill="#F2C94C"
              />
            </svg>
            Upgrade to Pro
          </button>

          <div className="pro-footer-links">
            <Link href="#">
              <a className="pro-footer-links-text">taltol</a>
            </Link>
            <Link href="#">
              <a className="pro-footer-links-text">Advertise</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProFooter;
