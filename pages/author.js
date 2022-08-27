import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { emojiData } from "../components/Emojis";
import MoodEmojiBox from "../components/MoodEmojiBox";
import Navbar from "../components/Navbar";
import QuoteCard from "../components/QuoteCard";
import { Topics } from "../components/TopicsData";
import frank from "../public/static/frankzapa.png";
import { CardData } from "../components/QuoteCardData";
import cc from "../public/static/jane.png";

export default function Author() {
  return (
    <>
      <Head>
        <title>Taltol</title>
        <meta
          name="description"
          content="We love quotes and we want to provide the best
user experience for quotes."
        />
        <meta name="keywords" content="quotes, planner, motivation" />
        <meta name="author" content="Abdul Hameid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <div className="px-[10%] flex lg:flex-row flex-col-reverse items-center justify-evenly lg:items-center lg:justify-between w-full h-[80vh] lg:h-[50vh] ">
        <div className="w-[100%] lg:w-[60%] ">
          <button className="text-[4vw] lg:text-[1.14vw] onHoverButton text-[#828282] py-2 px-2 bg-white border-[1px] border-[#E0E0E0] rounded-[4px] flex items-center">
            <svg
              className="mx-1"
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.8333 4.8V0L21 8.4L12.8333 16.8V11.88C7 11.88 2.91667 13.8 0 18C1.16667 12 4.66667 6 12.8333 4.8Z" />
            </svg>
            Share this page
          </button>
          <h1 className="font-bold text-[5vw] lg:text-[2.40vw]">
            Jane Austen Quotes
          </h1>
          <p className="w-[100%] lg:w-[85%] text-[4vw] lg:text-[1.40vw] text-[#828282] font-bold">
            Our database contains around 78,987 amazing inspirational quotes. We
            tried to filter them in a way that can be easy to find brwose for
            what you are looking for.
          </p>

          <div className="py-[2vh] flex items-center space-x-3">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#333333" />
            </svg>
            <p className="text-[4vw] lg:text-[1.14vw] text-black font-bold">
              Most used tags with the insprational quotes{" "}
              <span className="text-[#2F80ED]">best,</span>{" "}
              <span className="text-[#2F80ED]">life,</span>
              <span className="text-[#2F80ED]"> tomorrow,</span>{" "}
              <span className="text-[#2F80ED]">human</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] lg:w-[30%]">
          <Image src={cc} placeholder="blur" alt="author-page"></Image>
        </div>
      </div>

      {/* main content */}
      <div className="flex flex-col justify-start items-center  h-auto w-[100vw] ">
        <div className=" flex items-center justify-between  w-[80%] h-[7vh]">
          <p className="px-4 text-[#BDBDBD] font-bold  text-[4vw] md:text-[1vw]">
            885 results
          </p>
          <select
            className="font-bold text-[4vw] md:text-[1.10vw] bg-transparent text-[#BDBDBD] outline-none"
            name=""
            id=""
          >
            <option value="">Sort by</option>
            <option value="">newly</option>
            <option value="">latest</option>
            <option value="">old</option>
          </select>
        </div>

        <div className=" flex md:flex-row items-center md:items-start justify-center  flex-col h-[auto] w-[80%]">
          <div className=" items-center justify-center  gap-1 gap-x-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-[2vh] px-[1vw] w-[80%] h-auto">
            {CardData.map((item, key) => (
              <QuoteCard
                key={key}
                heart={item.heart}
                likes={item.likes}
                verified={item.verified}
                quote={item.quote.substring(0, 100) + "..."}
                img={item.authorImg}
                name={item.authorName}
              />
            ))}
          </div>
          <div className=" py-[2vh] px-[1.24vw]  h-[100%] w-[80%] md:w-[20%]">
            <h1 className="pb-4  text-[#BDBDBD] font-bold text-[5vw] md:text-[1.40vw]">
              Browse by topic
            </h1>
            {Topics.map((item, key) => (
              <div
                key={key}
                className="mb-[1vh] rounded-[4px] hover:text-white text-[#828282] cursor-pointer px-4 flex justify-start items-center  hover:bg-[#FF3294] bg-[#F2F2F2] h-[4vh] w-[100%]"
              >
                <p className=" text-[4vw] md:text-[1.05vw] font-bold">
                  {item.topicName}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* loading bar start */}
        <div className="flex justify-center items-center w-full h-[5vh]">
          <h1 className="text-[1.14vw] text-[#828282] font-bold">
            Loading more....
          </h1>
        </div>
        {/* loading bar end */}

        {/* footer start */}
        <div className="py-[4vh]   w-[80%] h-[20vh] ">
          <div className=" bg-[#E0E0E0] w-full h-[0.20vh]"></div>
          <div className="flex md:flex-row  flex-col justify-between items-start my-[1vh] w-full h-[20vh]">
            <div>
              <h1 className=" text-[#BDBDBD] text-[5vw] md:text-[2vw] font-bold">
                Taltol
              </h1>
              <div className="flex  items-center">
                <p className="text-[#828282] md:text-[1.10vw] text-[3vw] font-normal">
                  We love quotes and we want to provide the best
                  <br /> user experience for quotes.{" "}
                  <span className="text-[#FF3294]">Suggest Anything</span>
                </p>
              </div>
            </div>
            <div>
              <br className="lg:hidden" />
              <button className="flex items-center justify-evenly border-[1px] border-[#E0E0E0] rounded-[5px] w-[40vw] h-[7vh] lg:w-[13vw] lg:h-[8vh] bg-white">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8946 3.78925C11.5501 3.46089 12 2.78299 12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2C8 2.78299 8.44994 3.46089 9.10538 3.78925L7 8L3.85745 6.74298C3.94941 6.51328 4 6.26255 4 6C4 4.89543 3.10457 4 2 4C0.89543 4 0 4.89543 0 6C0 7.10457 0.89543 8 2 8C2.11335 8 2.2245 7.99057 2.3327 7.97245L3.4 14.3C3.5 15.3 4.4 16 5.3 16H14.6C15.6 16 16.4 15.3 16.6 14.3L17.6673 7.97245C17.7755 7.99057 17.8867 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 6.26255 16.0506 6.51328 16.1426 6.74298L13 8L10.8946 3.78925Z"
                    fill="#F2C94C"
                  />
                </svg>
                <p className="font-bold ">Upgrade to Pro</p>
              </button>
            </div>
            <br className="lg:hidden" />
            <div className="text-[#828282]">
              <p>Taltol</p>
              <p>Advertise</p>
            </div>
          </div>
        </div>
        {/* footer end */}
      </div>
    </>
  );
}
