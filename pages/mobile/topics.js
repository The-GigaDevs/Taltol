import React from "react";
import FooterTabMobile from "../../components/FooterTabMobile";
import Navbar from "../../components/Navbar";
import { Topics } from "../../components/TopicsData";
function TopicsSection() {
  return (
    <>
      <div className=" flex flex-col items-center">
        <Navbar />
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

      <FooterTabMobile />
    </>
  );
}

export default TopicsSection;
