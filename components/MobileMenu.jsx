import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileMenu = () => {
  const router = useRouter();

  return (
    <div className="mobile-menu">
      <div className="container">
        <div className="mobile-menu-content">
          <Link href="/">
            <a
              className={
                router.pathname == '/'
                  ? 'mobile-menu-link current'
                  : 'mobile-menu-link'
              }
            >
              <span className="mobile-menu-link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="mobile-menu-link-text">Home</span>
            </a>
          </Link>
          <Link href="/topicbrowse">
            <a
              className={
                router.pathname == '/topicbrowse'
                  ? 'mobile-menu-link current'
                  : 'mobile-menu-link'
              }
            >
              <span className="mobile-menu-link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 6H19"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 3H17"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 9H5C3.89543 9 3 9.6467 3 10.4444V20.5556C3 21.3533 3.89543 22 5 22H19C20.1046 22 21 21.3533 21 20.5556V10.4444C21 9.6467 20.1046 9 19 9Z"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="mobile-menu-link-text">Topics</span>
            </a>
          </Link>
          <Link href="/liked">
            <a
              className={
                router.pathname == '/liked'
                  ? 'mobile-menu-link current'
                  : 'mobile-menu-link'
              }
            >
              <span className="mobile-menu-link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="mobile-menu-link-text">Likes</span>
            </a>
          </Link>
          <Link href="/account">
            <a
              className={
                router.pathname == '/account'
                  ? 'mobile-menu-link current'
                  : 'mobile-menu-link'
              }
            >
              <span className="mobile-menu-link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#BDBDBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="mobile-menu-link-text">Account</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
