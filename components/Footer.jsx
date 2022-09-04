import Link from 'next/link';

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h1 className="footer-brand-title">taltol</h1>
            <p className="footer-brand-text">
              We love quotes and we want to provide the best user experience for
              quotes.{' '}
              <Link href="#">
                <a className="footer-brand-text-link">Suggest Anything</a>
              </Link>
            </p>
          </div>
          <p className="footer-cpr-text">
            &copy; Taltol, inc {footerYear}. All rights reserved
          </p>
          <span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
