import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../services/auth.service';
import AdminRoleSelect from './AdminRoleSelect';
import filterModal from '../FilterModal';
import FilterModal from '../FilterModal';
import Link from 'next/link';
import { authorSearch, fetchAuthors } from '../../slices/authors.slice';
import { fetchCategories, searchCategory } from '../../slices/categories.slice';
import { useEffect } from 'react';
import { getDropdownQuotesFromDB } from '../../slices/quotes.slice';
import { signOut } from '../../slices/auth.slice';

const { searchQuotesModal } = authService;
const AdminHeader = ({ picked = false }) => {
  const [searchText, setSearchText] = useState('');
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const authRedux = useSelector(state => state.auth);
  const router = useRouter();
  const quotes = useSelector(state => state.quotes.quotes);
  const dropdown = useSelector(state => state.admin.dropdown);

  function setSelectedCount(value, selected) {
    if (value === 'author') {
      setSelectedAuthors(selected);
    } else if (value === 'category') {
      setSelectedCategories(selected);
    } else if (value === 'tag') {
      setSelectedTags(selected);
    }
    //console.log(selected);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.pathname.includes('authors') && searchText === '') {
      dispatch(fetchAuthors({ page: 1, pageSize: 50, isAdmin: true }));
    } else if (
      window.location.pathname.includes('topics') &&
      searchText === ''
    ) {
      dispatch(fetchCategories({ page: 1, pageSize: 50, isAdmin: true }));
    } else if (
      window.location.pathname.includes('quotes') &&
      searchText === ''
    ) {
      if (picked === dropdown.topic) {
        dispatch(
          getDropdownQuotesFromDB({
            topic: dropdown.topic,
            author: '',
            tag: '',
            page: 1,
            pageSize: 50,
          })
        );
      } else if (picked === dropdown.author) {
        dispatch(
          getDropdownQuotesFromDB({
            topic: '',
            author: dropdown.author,
            tag: '',
            page: 1,
            pageSize: 50,
          })
        );
      } else if (picked === dropdown.tag) {
        dispatch(
          getDropdownQuotesFromDB({
            topic: '',
            author: '',
            tag: dropdown.tag,
            page: 1,
            pageSize: 50,
          })
        );
      }
    }
  }, [searchText]);
  async function fetchQuotes(slug) {
    if (slug && window.location.pathname.includes('quotes')) {
      const results = await searchQuotesModal('', '', '', slug);
      dispatch({ type: 'quotes/addQuotes', payload: results });
    } else if (slug && window.location.pathname.includes('authors')) {
      dispatch(authorSearch(slug));
    } else if (slug && window.location.pathname.includes('topics')) {
      dispatch(searchCategory(slug));
    }
  }
  return (
    <div className="admin-header">
      <AdminRoleSelect />
      <div className="admin-search">
        <span className="admin-search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
              fill="#E0E0E0"
            />
          </svg>
        </span>
        <input
          type="text"
          className="admin-search-field"
          placeholder="Search"
          value={searchText}
          onChange={({ target }) => setSearchText(target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              fetchQuotes(searchText);
            }
          }}
        />
      </div>
      <div className="admin-filter" onClick={() => setShow(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
        >
          <path
            d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z"
            fill="#828282"
          />
        </svg>
      </div>
      {authRedux?.isAuthenticated ? (
        <div onClick={() => setIsOpen(!isOpen)} className="navbar-profile ">
          {authRedux?.isAuthenticated &&
          (authRedux?.user?.profile_pic !== null ||
            authRedux?.user?.social_image_url !== null) ? (
            <img
              src={
                authRedux?.user?.profile_pic ||
                authRedux?.user?.social_image_url
              }
              alt="userImage"
              className="navbar-profile-avatar-social"
            />
          ) : (
            <>
              <span className="navbar-profile-avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M24 12C24 5.3833 18.6172 0 12 0C5.38281 0 0 5.3833 0 12C0 15.3836 1.41321 18.4387 3.67365 20.6223C3.72656 20.6912 3.78925 20.747 3.86261 20.7941C6.00385 22.7769 8.85828 24 12 24C15.1417 24 17.9962 22.7769 20.1374 20.7941C20.2108 20.747 20.2734 20.6912 20.3264 20.6223C22.5868 18.4387 24 15.3836 24 12ZM12 1.5C17.79 1.5 22.5 6.21045 22.5 12C22.5 14.455 21.6467 16.7108 20.2297 18.5009C19.5792 16.403 17.7221 14.7607 15.2016 14.0051C16.5752 13.011 17.4736 11.4005 17.4736 9.58057C17.4736 6.56641 15.0186 4.11426 12 4.11426C8.98145 4.11426 6.52637 6.56641 6.52637 9.58057C6.52637 11.4005 7.4248 13.011 8.7984 14.0051C6.27789 14.7607 4.42078 16.403 3.77026 18.5009C2.35327 16.7108 1.5 14.455 1.5 12C1.5 6.21045 6.20996 1.5 12 1.5ZM8.02637 9.58057C8.02637 7.39355 9.80859 5.61426 12 5.61426C14.1914 5.61426 15.9736 7.39355 15.9736 9.58057C15.9736 11.7676 14.1914 13.5469 12 13.5469C9.80859 13.5469 8.02637 11.7676 8.02637 9.58057ZM5.03076 19.832C5.25623 17.082 8.17236 15.0469 12 15.0469C15.8276 15.0469 18.7438 17.082 18.9692 19.832C17.1131 21.4855 14.6757 22.5 12 22.5C9.32428 22.5 6.8869 21.4855 5.03076 19.832Z"
                    fill="#333333"
                  />
                </svg>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                  fill="#333333"
                />
              </svg>
            </>
          )}
          <div
            className={
              isOpen
                ? 'navbar-profile-dropdown active'
                : 'navbar-profile-dropdown'
            }
          >
            <h2 className="navbar-profile-dropdown-name">
              {authRedux?.user?.first_name + ' ' + authRedux?.user?.last_name}
            </h2>
            <p className="navbar-profile-dropdown-mail">
              {authRedux?.user?.email}
            </p>

            <div
              onClick={async () => {
                await dispatch(signOut());
                await dispatch(fetchQuotes({ page: 1, pageSize: 10 }));
                router.push('/login');
              }}
            >
              <span className="navbar-profile-dropdown-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                Log Out
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Link href={'/login'} passHref>
          <button type="button" className="navbar-login-register-btn">
            Login/Signup
          </button>
        </Link>
      )}
      <FilterModal
        show={show}
        setShow={setShow}
        selectedAuthorsProp={selectedAuthors}
        selectedTagsProp={selectedTags}
        selectedCategoriesProp={selectedCategories}
        search={search}
        setSelectedCount={setSelectedCount}
      />
    </div>
  );
};

export default AdminHeader;
