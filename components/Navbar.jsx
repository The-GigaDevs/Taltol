import Link from "next/link";
import { useState, useEffect} from "react";
import FilterModal from "./FilterModal";
import { Provider } from "react-redux";
import  store  from "../store";
import { fetchQuotes, addQuotes } from "../slices/quotes.slice";
import authService  from "../services/auth.service";
import { useSelector, useDispatch } from "react-redux";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const { searchQuotesModal } = authService;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [search, setSearch] = useState("");
  const session = useSession();
  //session testing
  // const { session} = useSession();

  const dispatch = useDispatch();
  const router = useRouter();

  function setSelectedCount(value, selected) {
    if(value === "author") {
    setSelectedAuthors(selected);
    } else if(value === "category") {
    setSelectedCategories(selected);
    } else if(value === "tag") {
    setSelectedTags(selected);
    }
    console.log(selected);
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log("Session from navbar: ", session);

  }, []);
 



  async function searchQuotes() {
      if(isOpen){
        const results = await searchQuotesModal(selectedAuthors, selectedTags, selectedCategories, search);
        dispatch({type: "quotes/addQuotes", payload: results})
      } 
  }


  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link href="/" passHref>
              <a className="navbar-brand">
                t<span className="navbar-brand-mobile">altol</span>
              </a>
            </Link>
            <div className="navbar-search">
              <div className="navbar-search-group">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="#BDBDBD"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"></path>
                </svg>
                <input
                
                  onChange={(e) => handleSearch(e)}
                  type="text"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      searchQuotes();
                    }
                  }}
                  className="navbar-search-field"
                  placeholder="Search quotes, authors, and tags"
                />
              </div>
              <div
                className="navbar-filters"
                onClick={() => {
                  setShow(true);
                }}
              >
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7Z"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 16C12.3431 16 11 14.6569 11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13C17 14.6569 15.6569 16 14 16Z"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.99685 4H17M11.0031 13H1"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="navbar-filters-text">Filters</span>
                <span className="navbar-filters-count">{selectedAuthors.length + selectedCategories.length + selectedTags.length}</span>
              </div>
            </div>
            {(isAuthenticated || session?.status === 'authenticated') ?
              <div onClick={() => setIsOpen(!isOpen)} className="navbar-profile">
                <span className="navbar-profile-avatar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path
                    d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                    fill="#333333"
                  />
                </svg>
                <div
                  className={
                    isOpen
                      ? "navbar-profile-dropdown active"
                      : "navbar-profile-dropdown"
                  }
                >
                  <h2 className="navbar-profile-dropdown-name">Atabic Umer</h2>
                  <p className="navbar-profile-dropdown-mail">
                    atabic14@gmail.com
                  </p>
                  <Link href="/users">
                    <a className="navbar-profile-dropdown-link">
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
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        ></path>
                      </svg>
                      Collections
                    </a>
                  </Link>
                  <div
                    onClick={() => {
                      signOut({ redirect: false, callbackUrl: '/login' });
                    }}>
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
              :
              <Link href={'/login'} passHref>
                <button type="button" className="filter-modal-footer-btn">
                    Login/Signup
                </button>
              </Link>
            }
          </div>
        </div>
      </nav>

    <Provider store={store}>

        <FilterModal show={show} setShow={setShow} selectedAuthorsProp={selectedAuthors} selectedTagsProp={selectedTags} selectedCategoriesProp={selectedCategories} search={search} setSelectedCount={setSelectedCount}/>
        </Provider>
    </>
  );
};

export default Navbar;