import React from "react";
import FooterTabMobile from "../components/FooterTabMobile";
import Image from "next/image";
import john from "../public/static/johns.png";
import Link from "next/link";
function account() {
  return (
    <>
      <div className="  w-full h-[100vh]">
        <div className="flex flex-col items-center w-full h-[85vh] ">
          <div className="py-[4vh] space-x-2 flex items-center">
            <Image src={john} placeholder="blur" alt="adam johns"></Image>
            <div>
              <h1 className="quicksandFont font-bold text-[7vw]">Adam Johns</h1>
              <p className="text-[4vw] text-[#828282] font-bold quicksandFont">
                Since Feb, 2020{" "}
              </p>
              <p className="text-[4vw] text-[#828282] font-bold quicksandFont">
                adam@gmail.com
              </p>
            </div>
          </div>

          <div className=" text-justify ">
            <h2 className="py-[4vh] quicksandFont font-bold text-[6vw]">
              Liked quotes
            </h2>
            <h2 className="quicksandFont font-bold text-[6vw]">
              {" "}
              Saved collections
            </h2>
          </div>
        </div>
        <Link href="/">
          <div className="px-[8vw] flex items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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

            <h1 className="text-[#BDBDBD] text-[4vw] font-semibold">
              Sign out
            </h1>
          </div>
        </Link>
      </div>

      <FooterTabMobile />
    </>
  );
}

export default account;
