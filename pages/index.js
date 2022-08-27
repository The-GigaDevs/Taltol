import React from "react";
import Link from "next/link";
import Head from "next/head";
function index() {
  return (
    <>
      <Head>
        <title>Quotes Planner Login</title>
        <meta
          name="description"
          content="We love quotes and we want to provide the best
user experience for quotes."
        />
        <meta name="keywords" content="quotes, planner, motivation" />
        <meta name="author" content="Abdul Hameid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-end px-[2vw] w-[100vw] h-[6vh] ">
        <Link href="/home">
          <svg
            className="cursor-pointer"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z"
              fill="#333333"
            />
          </svg>
        </Link>
      </div>
      <div className="flex flex-col items-center  justify-center w-[100vw] h-[94vh] ">
        <h1 className="font-bold text-[6vw] lg:text-[2vw]">
          Log in or sign up{" "}
        </h1>
        <div className=" h-[30vh] w-[20vw] flex flex-col justify-evenly items-center">
          <div className="flex items-center justify-evenly  border-[1px] border-[#E0E0E0] w-[45vw] lg:w-[17vw] h-[6vh] rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              fill="none"
              viewBox="0 0 22 20"
            >
              <path
                fill="#007EBB"
                fillRule="evenodd"
                d="M.555 6.413h4.288V20H.555V6.413zM2.59 4.715h-.031C1.006 4.714 0 3.676 0 2.36 0 1.017 1.036 0 2.62 0 4.2 0 5.173 1.014 5.204 2.355c0 1.317-1.004 2.36-2.615 2.36zM22 20h-4.862v-7.03c0-1.841-.76-3.098-2.433-3.098-1.28 0-1.991.848-2.322 1.665-.124.293-.105.702-.105 1.11V20H7.46s.062-12.455 0-13.587h4.817v2.133c.284-.933 1.824-2.263 4.28-2.263 3.048 0 5.442 1.954 5.442 6.162V20z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="text-[3vw] lg:text-[1vw]">Continue with LinkedIn</h1>
          </div>

          <div className="flex items-center justify-evenly w-[45vw] lg:w-[17vw] border-[1px] border-[#E0E0E0] h-[6vh] rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="none"
              viewBox="0 0 23 23"
            >
              <path
                fill="#FBBC05"
                fillRule="evenodd"
                d="M4.773 11.073c0-.72.12-1.409.332-2.055l-3.732-2.85a11.067 11.067 0 00-1.137 4.905c0 1.763.41 3.426 1.136 4.902l3.73-2.855a6.55 6.55 0 01-.33-2.047z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#EA4335"
                fillRule="evenodd"
                d="M11.325 4.53c1.563 0 2.974.554 4.083 1.46l3.226-3.222C16.668 1.057 14.148 0 11.325 0a11.056 11.056 0 00-9.951 6.168l3.731 2.85a6.535 6.535 0 016.22-4.488z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#34A853"
                fillRule="evenodd"
                d="M11.325 17.616a6.535 6.535 0 01-6.22-4.487l-3.731 2.85a11.055 11.055 0 009.951 6.167c2.705 0 5.287-.96 7.225-2.76l-3.542-2.738c-1 .63-2.258.968-3.683.968z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#4285F4"
                fillRule="evenodd"
                d="M21.91 11.073c0-.654-.101-1.359-.252-2.013H11.325v4.278h5.948c-.298 1.459-1.107 2.58-2.265 3.31l3.542 2.739c2.036-1.89 3.36-4.705 3.36-8.314z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="text-[3vw] lg:text-[1vw]">Continue with Google</h1>
          </div>

          <div className="flex items-center justify-evenly w-[45vw] lg:w-[17vw] border-[1px] border-[#E0E0E0] h-[6vh] rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="none"
              viewBox="0 0 23 23"
            >
              <path
                fill="#00AAEC"
                fillRule="evenodd"
                d="M22.147 4.03c-.814.371-1.69.622-2.61.734a4.65 4.65 0 001.999-2.577 8.949 8.949 0 01-2.888 1.13 4.481 4.481 0 00-3.316-1.471c-2.507 0-4.541 2.086-4.541 4.659 0 .365.038.72.117 1.06-3.776-.194-7.124-2.047-9.366-4.869a4.744 4.744 0 00-.615 2.345 4.69 4.69 0 002.021 3.878A4.462 4.462 0 01.89 8.337v.058c0 2.258 1.567 4.141 3.646 4.568-.38.11-.782.164-1.197.164a4.42 4.42 0 01-.855-.083c.578 1.85 2.255 3.198 4.244 3.234A8.971 8.971 0 010 18.209a12.651 12.651 0 006.965 2.092c8.358 0 12.927-7.098 12.927-13.255 0-.203-.004-.406-.012-.604a9.318 9.318 0 002.267-2.412z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="text-[3vw] lg:text-[1vw]">Continue with Twitter</h1>
          </div>

          <div className="flex items-center justify-evenly w-[45vw] lg:w-[17vw] border-[1px] border-[#E0E0E0] h-[6vh] rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="none"
              viewBox="0 0 23 23"
            >
              <path
                fill="#4460A0"
                fillRule="evenodd"
                d="M11.829 22.146H1.222A1.222 1.222 0 010 20.924V1.222C0 .547.547 0 1.222 0h19.702c.675 0 1.222.547 1.222 1.222v19.702c0 .675-.547 1.222-1.222 1.222h-5.643V13.57h2.878l.431-3.342h-3.31V8.094c0-.968.27-1.627 1.657-1.627l1.77-.001v-2.99a23.689 23.689 0 00-2.58-.131c-2.551 0-4.298 1.558-4.298 4.418v2.465H8.943v3.342h2.886v8.576z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="text-[3vw] lg:text-[1vw]">Continue with Facebook</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-[20vw] h-[5vh]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="1"
            fill="none"
            viewBox="0 0 120 1"
          >
            <path stroke="#BDBDBD" d="M0 0.5L120 0.5"></path>
          </svg>
          <p>Or</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="1"
            fill="none"
            viewBox="0 0 120 1"
          >
            <path stroke="#BDBDBD" d="M0 0.5L120 0.5"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-evenly w-[20vw] h-[20vh] ">
          <input
            type="text"
            placeholder="Enter email address"
            className="px-2 logInInput outline-none quicksandFont font-bold placeholder:text-[3.50vw] lg:placeholder:text-[1vw] h-[5vh] w-[45vw] lg:w-[17vw]"
          />
          <Link href="/home">
            <button className="bg-[#FF3294] text-white quicksandFont font-bold rounded-[4px] h-[8vh] w-[45vw] lg:w-[17vw]">
              Continue with email
            </button>
          </Link>
        </div>
        <div className="w-[90vw] lg:w-[42vw] text-center h-[8vh]">
          {" "}
          <p className="text-[#828282] quicksandFont">
            By continuing, you acknowledge that you have read and understood,
            and agree to Taltol’s{" "}
            <span className="text-[#333333] font-bold">Terms & Conditions</span>{" "}
            and <span className="text-[#333333] font-bold">Privacy Policy</span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default index;
