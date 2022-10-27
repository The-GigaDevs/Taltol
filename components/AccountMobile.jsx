import randomAuthor from '../public/static/quote-card-author.svg';
import Link from 'next/link';

const AccountMobile = () => {
  return (
    <div className="account-mobile">
      <div className="account-mobile-content">
        <div className="account-mobile-header">
          <img
            src={randomAuthor.src}
            alt="User Avatar"
            className="account-mobile-header-avatar"
          />
          <div className="account-mobile-header-info">
            <h2 className="account-mobile-header-info-name">Adam Johns</h2>
            <p className="account-mobile-header-info-date">Since Feb, 2020</p>
            <p className="account-mobile-header-info-email">adam@gmail.com</p>
          </div>
        </div>

        <div className="account-mobile-body">
          <Link href="/liked">
            <a className="account-mobile-link">Liked quotes</a>
          </Link>
          <Link href="/collection">
            <a className="account-mobile-link">Saved collections</a>
          </Link>
        </div>
      </div>
      <div className="account-mobile-footer">
        <Link href="/login">
          <a className="account-mobile-footer-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17L21 12L16 7"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="#BDBDBD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sign out
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AccountMobile;
