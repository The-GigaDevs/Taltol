import React, { useState } from "react";
import Image from "next/image";
import QuoteCard from "../components/QuoteCard";
import Link from "next/link";
import frank from "../public/static/frankzapa.png";
import { CardData } from "../components/QuoteCardData";
import CollectionModal from "./CollectionModal";

function QuoteModal() {
  const [colModal, setColModal] = useState();

  const handleColModal = () => {
    setColModal(!colModal);
  };
  return (
    <>
      {colModal ? (
        <CollectionModal onc={handleColModal} doneOnc={handleColModal} />
      ) : null}

      <div className="flex justify-start items-center flex-col  bg-white w-[100vw] h-[200vh] lg:h-[260vh]">
        <div className="cursor-pointer flex justify-end items-center px-[1vw] bg-black h-[7vh] w-full">
          <Link href="/home">
            <div className=" py-2 px-2">
              {" "}
              <svg
                className="animatedIcon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z" />
              </svg>
            </div>
          </Link>
        </div>

        {/* main white container */}
        <div className="flex justify-center items-center w-full h-[10vh] ">
          <h1 className="text-[#BDBDBD] font-bold text-center lg:text-justify text-[5vw] lg:text-[2vw]">
            Confident quote from Frank Zappa, Be who .., - quotesplanner
          </h1>
        </div>
        <div className="w-full h-20vh bg-red-400"></div>

        <div className="flex flex-col justify-evenly lg:justify-around items-center bg-white w-[60%] h-[150vh] lg:h-[250vh]">
          <div className="  w-full h-[71vh] ">
            <div className="flex lg:flex-row flex-col  items-center justify-between   w-full h-[20vh] lg:h-[11vh]">
              <div className="flex  flex-col lg:flex-row  items-center  px-[1vw]">
                <Image
                  src={frank}
                  width={60}
                  height={60}
                  alt="quote-author-image"
                ></Image>

                <div className="px-2 ">
                  <h1 className="text-[5vw] lg:text-[1.50vw] text-center lg:text-justify">
                    Frank Zappa
                  </h1>
                  <p className="flex text-[#BDBDBD] space-x-1 text-[2vh]">
                    Main tags:&nbsp;
                    <span className="font-bold text-[#828282] hover:text-[#FF3294]">
                      {" "}
                      tommorow
                    </span>
                    <span className="font-bold text-[#828282] hover:text-[#FF3294]">
                      matter
                    </span>
                    <span className="font-bold text-[#828282] hover:text-[#FF3294]">
                      today
                    </span>
                  </p>
                </div>
              </div>
              <div className=" px-[1.40vw] flex items-center space-x-5  h-[10vh] ">
                <div className="onHoverPink cursor-pointer flex flex-col items-center text-[#BDBDBD]">
                  <svg
                    className=""
                    width="16"
                    height="22"
                    viewBox="0 0 16 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 4L10.58 5.42L8.99 3.83V15H7.01V3.83L5.42 5.42L4 4L8 0L12 4ZM16 9V20C16 21.1 15.1 22 14 22H2C0.89 22 0 21.1 0 20V9C0 7.89 0.89 7 2 7H5V9H2V20H14V9H11V7H14C15.1 7 16 7.89 16 9Z" />
                  </svg>
                  <p>Share</p>
                </div>
                <div className="onHoverPink cursor-pointer flex flex-col items-center text-[#BDBDBD]">
                  <svg
                    className=""
                    width="20"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.5 21L9.8325 19.4894C3.91 14.145 0 10.6202 0 6.29428C0 2.76948 2.783 0 6.325 0C8.326 0 10.2465 0.926976 11.5 2.39183C12.7535 0.926976 14.674 0 16.675 0C20.217 0 23 2.76948 23 6.29428C23 10.6202 19.09 14.145 13.1675 19.5008L11.5 21Z" />
                  </svg>
                  <p>Like</p>
                </div>
                <div
                  onClick={handleColModal}
                  className="onHoverPink cursor-pointer flex flex-col items-center text-[#BDBDBD]"
                >
                  <svg
                    className=""
                    width="25"
                    height="25"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.4063 20.6665H20.3438V17.7603H23.2501V15.8228H20.3438V12.9165H18.4063V15.8228H15.5001V17.7603H18.4063V20.6665ZM4.55322 25.8332C4.03656 25.8332 3.58447 25.634 3.19697 25.2358C2.80947 24.8375 2.61572 24.3908 2.61572 23.8957V7.104C2.61572 6.60887 2.80947 6.16216 3.19697 5.7639C3.58447 5.36564 4.03656 5.1665 4.55322 5.1665H13.5949L15.5324 7.104H26.5116C27.0067 7.104 27.4534 7.30314 27.8517 7.7014C28.2499 8.09966 28.4491 8.54637 28.4491 9.0415V23.8957C28.4491 24.3908 28.2499 24.8375 27.8517 25.2358C27.4534 25.634 27.0067 25.8332 26.5116 25.8332H4.55322ZM4.55322 7.104V23.8957H26.5116V9.0415H14.7251L12.7876 7.104H4.55322ZM4.55322 7.104V9.0415V23.8957V7.104Z" />
                  </svg>
                  <p>Save</p>
                </div>
              </div>
            </div>
            <div className="lg:-ml-0 -ml-[5vw] lg:w-auto w-[80vw]  mt-[5vh] lg:pt-[2vh] text-[5.10vw] lg:text-[3.80vw] font-bold">
              <h1>
                A beautiful person is someone who stays true to themselves and
                their spirit; someone who is self-confident and can make you
                smile.
              </h1>
            </div>
          </div>
          <div className="lg:pt-0  pt-[40vh]  flex items-start justify-around flex-col h-[40vh] w-full">
            <h1 className=" text-[#BDBDBD] font-bold text-[4vw] lg:text-[1.30vw]">
              Other quotes for Frank Zappo
            </h1>
            <div className="flex  lg:flex-row flex-col  w-full items-center justify-start space-x-1">
              {CardData.slice(0, 4).map((item, key) => (
                <QuoteCard
                  key={key}
                  heart={item.heart}
                  likes={item.likes}
                  verified={item.verified}
                  quote={item.quote.substring(0, 80) + "..."}
                  img={item.authorImg}
                  name={item.authorName}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-start justify-around flex-col h-[80vh] w-full">
            <h1 className=" text-[#BDBDBD] font-bold lg:text-[1.30vw]">
              Other similar quotes for{" "}
              <span className="text-[#FF3294]"> tomorrow</span>
            </h1>
            <div className="flex   w-full lg:flex-row flex-col items-center justify-start space-x-1">
              {CardData.slice(0, 4).map((item, key) => (
                <QuoteCard
                  key={key}
                  heart={item.heart}
                  likes={item.likes}
                  verified={item.verified}
                  quote={item.quote.substring(0, 80) + "..."}
                  img={item.authorImg}
                  name={item.authorName}
                />
              ))}
            </div>
            <div className=" flex w-full lg:flex-row flex-col items-center justify-start space-x-1">
              {CardData.slice(0, 4).map((item, key) => (
                <QuoteCard
                  key={key}
                  heart={item.heart}
                  likes={item.likes}
                  verified={item.verified}
                  quote={item.quote.substring(0, 80) + "..."}
                  img={item.authorImg}
                  name={item.authorName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteModal;
