import React from "react";
import Image from "next/image";
import verifiedbadge from "../public/static/verify.png";
import verifiedPlaceholder from "../public/static/verifyPlaceholder.png";
import Link from "next/link";

function QuoteCard({ likes, quote, img, name, verified }) {
  return (
    <>
      <Link href="/quote">
        <div className="cursor-pointer bg-white  md:w-[15.50vw] md:h-[32vh] border-2 border-[#E0E0E0] ">
          <div className="px-[1.50vh] flex justify-between items-center w-[100%] h-[6vh]  ">
            <div>
              {verified ? (
                <Image src={verifiedbadge} alt="verify-badge"></Image>
              ) : (
                <Image
                  src={verifiedPlaceholder}
                  alt="verify-placeholder"
                ></Image>
              )}
            </div>
            <div className="flex justify-between items-center space-x-2">
              <svg
                className="heartSVG"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 20L9.405 18.5613C3.74 13.4714 0 10.1144 0 5.99455C0 2.6376 2.662 0 6.05 0C7.964 0 9.801 0.882834 11 2.27793C12.199 0.882834 14.036 0 15.95 0C19.338 0 22 2.6376 22 5.99455C22 10.1144 18.26 13.4714 12.595 18.5722L11 20Z" />
              </svg>

              <p className="text-[#828282] font-bold text-[3vw] md:text-[1vw]">
                {likes}
              </p>
            </div>
          </div>
          <div className="px-[5vw] md:px-[1.40vw] w-[100%] h-[17vh] ">
            <h1 className="text-[#4F4F4F] font-bold text-[4vw] md:text-[1.08vw]">
              {quote}
            </h1>
          </div>
          <div className="flex items-center space-x-3 px-[1vw] w-[100%] h-[8vh] ">
            <Image src={img} alt="author-image"></Image>
            <h2 className="quicksandFont text-[4vw] md:text-[1vw]">{name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default QuoteCard;
