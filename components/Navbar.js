import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/static/logo.png";
import FilterModal from "./FilterModal";
import Link from "next/link";
function Navbar() {
  const [settings, setSettings] = useState();
  const [filterSettings, setFilterSettings] = useState();

  const handleSettings = () => {
    setSettings(!settings);
  };
  const handleFilterSettings = () => {
    setFilterSettings(!filterSettings);
  };

  return (
    <>
      <div className="md:flex px-[4vw] hidden justify-between items-center w-[100vw] h-[9vh] navStyle">
        <div className=" ">
          <Link href="/home">
            <h1 className="lalezarFont cursor-pointer flex justify-around items-center text-[2vw]">
              Taltol
            </h1>
          </Link>
        </div>
        <div className="h-[7vh] w-[30vw] ">
          {/* searchbar start */}
          <div className="flex justify-around items-center  w-[100%] h-[100%] searchinput">
            <div className="space-x-3 flex items-center">
              <svg
                className="closed"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="#BDBDBD"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" />
              </svg>

              <input
                className="font-medium text-[1vw] placeholder:text-[#BDBDBD] outline-none"
                type="text "
                placeholder="Search for something"
              />
            </div>

            {/* filter button start */}
            <div
              onClick={handleFilterSettings}
              className="relative cursor-pointer flex items-center space-x-3"
            >
              <div className="text-[0.80vw] text-white font-bold flex items-center justify-center absolute h-[15px] w-[14px] left-[90%] -top-[15%] rounded-full bg-[#FF3294]">
                3
              </div>
              <svg
                width="10"
                height="30"
                viewBox="0 0 1 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499999"
                  y2="30"
                  stroke="#E0E0E0"
                />
              </svg>

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
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 16C12.3431 16 11 14.6569 11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13C17 14.6569 15.6569 16 14 16Z"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.99685 4H17M11.0031 13H1"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h2 className="font-bold text-[1vw]">Filters</h2>
            </div>
            {/* filter button end */}
          </div>
          {/* searchbar end */}
        </div>
        <div className="cursor-pointer flex justify-center items-center ">
          <div onClick={handleSettings} className="relative">
            {/* account modal start */}
            {settings ? (
              <div className="z-50 flex flex-col px-2 items-start justify-evenly absolute bg-white rounded-[4px] border-[1px] border-[#E0E0E0] right-0 top-[120%] w-auto h-[26vh]">
                <div>
                  {" "}
                  <h1 className="font-bold text-[1.60vw]">Abdul Hameid </h1>
                  <p className="text-[1vw] text-[#828282]">
                    abdulhameid@gmail.com
                  </p>
                </div>
                <div className="flex flex-col items-start w-full h-[10vh] justify-around">
                  {" "}
                  <button className="hover:text-white hover:font-bold hover:bg-[#FF3294] w-full h-[5vh] rounded-[4px] flex items-center text-[#828282] font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-1 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>{" "}
                    Collections
                  </button>
                  <Link href="/">
                    <button className="hover:text-white hover:font-bold hover:bg-[#FF3294] w-full h-[5vh] rounded-[4px] flex items-center text-[#828282] font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mx-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>{" "}
                      Log Out
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
            {/* account modal end */}
            <svg
              width="45"
              height="24"
              viewBox="0 0 45 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 12C24 5.3833 18.6172 0 12 0C5.38281 0 0 5.3833 0 12C0 15.3836 1.41321 18.4387 3.67365 20.6223C3.72656 20.6912 3.78925 20.747 3.86261 20.7941C6.00385 22.7769 8.85828 24 12 24C15.1417 24 17.9962 22.7769 20.1374 20.7941C20.2108 20.747 20.2734 20.6912 20.3264 20.6223C22.5868 18.4387 24 15.3836 24 12ZM12 1.5C17.79 1.5 22.5 6.21045 22.5 12C22.5 14.455 21.6467 16.7108 20.2297 18.5009C19.5792 16.403 17.7221 14.7607 15.2016 14.0051C16.5752 13.011 17.4736 11.4005 17.4736 9.58057C17.4736 6.56641 15.0186 4.11426 12 4.11426C8.98145 4.11426 6.52637 6.56641 6.52637 9.58057C6.52637 11.4005 7.4248 13.011 8.7984 14.0051C6.27789 14.7607 4.42078 16.403 3.77026 18.5009C2.35327 16.7108 1.5 14.455 1.5 12C1.5 6.21045 6.20996 1.5 12 1.5ZM8.02637 9.58057C8.02637 7.39355 9.80859 5.61426 12 5.61426C14.1914 5.61426 15.9736 7.39355 15.9736 9.58057C15.9736 11.7676 14.1914 13.5469 12 13.5469C9.80859 13.5469 8.02637 11.7676 8.02637 9.58057ZM5.03076 19.832C5.25623 17.082 8.17236 15.0469 12 15.0469C15.8276 15.0469 18.7438 17.082 18.9692 19.832C17.1131 21.4855 14.6757 22.5 12 22.5C9.32428 22.5 6.8869 21.4855 5.03076 19.832Z"
                fill="#333333"
              />
              <path
                d="M43.59 11L39 15.58L34.41 11L33 12.41L39 18.41L45 12.41L43.59 11Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-center items-center w-[100vw] h-[9vh] navStyle ">
        <div className="flex items-center px-2">
          <Image src={logo} width={30} height={40} alt="Logo"></Image>
        </div>
        <div className="flex items-center justify-evenly bg-[#F9F9F9] w-[80%] h-[6vh]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0833 16.3333H17.1617L16.835 16.0183C17.9783 14.6883 18.6667 12.9617 18.6667 11.0833C18.6667 6.895 15.2717 3.5 11.0833 3.5C6.895 3.5 3.5 6.895 3.5 11.0833C3.5 15.2717 6.895 18.6667 11.0833 18.6667C12.9617 18.6667 14.6883 17.9783 16.0183 16.835L16.3333 17.1617V18.0833L22.1667 23.905L23.905 22.1667L18.0833 16.3333ZM11.0833 16.3333C8.17833 16.3333 5.83333 13.9883 5.83333 11.0833C5.83333 8.17833 8.17833 5.83333 11.0833 5.83333C13.9883 5.83333 16.3333 8.17833 16.3333 11.0833C16.3333 13.9883 13.9883 16.3333 11.0833 16.3333Z"
              fill="#828282"
            />
          </svg>
          <input
            className="text-[#BDBDBD] bg-transparent outline-none"
            type="text"
            placeholder="Search quotes, author and tags"
          />
          <svg
            onClick={handleFilterSettings}
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
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 16C12.3431 16 11 14.6569 11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13C17 14.6569 15.6569 16 14 16Z"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.99685 4H17M11.0031 13H1"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* filter modal here......... */}
      {filterSettings ? <FilterModal onc={handleFilterSettings} /> : null}
      {/* filter modal here......... */}
    </>
  );
}

export default Navbar;
