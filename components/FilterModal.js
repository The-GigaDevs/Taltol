import React, { useState } from "react";

function FilterModal({ onc }) {
  const [inputField, setInputField] = useState();

  const [inputField2, setInputField2] = useState();

  const [inputField3, setInputField3] = useState();

  const handleInputField = () => {
    setInputField(!inputField);
  };

  const handleInputField2 = () => {
    setInputField2(!inputField2);
  };

  const handleInputField3 = () => {
    setInputField3(!inputField3);
  };
  return (
    <>
      {/* filter modal start */}
      <div className=" flex items-start justify-center absolute w-[100vw] z-50 h-[200vh] bg-black bg-opacity-70 ">
        <div className="rounded-[5px]  absolute lg:-top-0 -top-[4.10%] w-[100vw] lg:w-[60vw] my-[1.5%] h-[90vh] lg:h-[85vh] bg-white">
          <div className="border-b-[1px] border-[#F2F2F2] flex items-center justify-between px-[1vw] w-full h-[9vh]">
            <div onClick={onc} className="py-2 px-2 cursor-pointer">
              <svg
                className="animatedDarkIcon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z" />
              </svg>
            </div>
            <h1 className="text-[6vw] lg:text-[2vw] font-bold ">Filters</h1>
            <p className="text-white">.</p>
          </div>
          <div className="w-full h-[79vh] lg:h-[64vh]  overflow-y-auto">
            <div className="w-full  h-[40vh]  ">
              <div className="py-[10vh] flex  items-center px-[2.70vw] space-x-4 w-full h-[12vh] ">
                <h1 className="font-medium text-[5vw] lg:text-[1.80vw]">
                  Authors
                </h1>
                {/* input div button start */}

                {inputField ? null : (
                  <div
                    onClick={handleInputField}
                    className="py-1 cursor-pointer px-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" text-[#E0E0E0] mx-1 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                )}

                {inputField ? (
                  <div className="border-[1px] border-[#E0E0E0]  flex items-center bg-white rounded-[5px] h-[6vh] w-[55vw] lg:w-[15vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" text-[#E0E0E0] mx-1 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      className="placeholder:text-[#E0E0E0] placeholder:font-medium font-medium w-[40vw] lg:w-[10vw] outline-none"
                      type="text"
                      placeholder="Search in author"
                    />
                  </div>
                ) : null}

                {/* input div button end */}
              </div>
              <div className="items-center justify-center  px-[2vw] w-full h-auto grid grid-cols-3 gap-8">
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Frank Zappo
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Yara Tmash
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Kahldoun Bassam
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Edward Hani
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Francisko Bulla
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Bandar Tamam
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Frank Zappo
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Yara Tmash
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Kahldoun Bassam
                    </span>
                  </label>
                </div>
                <h1 className="px-[2vh] cursor-pointer text-[4vw] lg:text-[1.10vw] underline quicksandFont font-semibold">
                  Show all
                </h1>
              </div>

              {/* TAGS START */}
              <div className="py-[10vh] flex  items-center px-[2.70vw] space-x-4 w-full h-[12vh] ">
                <h1 className="font-medium text-[5vw] lg:text-[1.80vw]">
                  Tags
                </h1>
                {/* input div button start */}

                {inputField2 ? null : (
                  <div
                    onClick={handleInputField2}
                    className="py-1 cursor-pointer px-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" text-[#E0E0E0] mx-1 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                )}

                {inputField2 ? (
                  <div className="border-[1px] border-[#E0E0E0]  flex items-center bg-white rounded-[5px] h-[6vh] w-[55vw] lg:w-[15vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" text-[#E0E0E0] mx-1 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      className="placeholder:text-[#E0E0E0] placeholder:font-medium font-medium w-[40vw] lg:w-[10vw] outline-none"
                      type="text"
                      placeholder="Search in author"
                    />
                  </div>
                ) : null}

                {/* input div button end */}
              </div>
              <div className="items-center justify-center  px-[2vw] w-full h-auto grid grid-cols-3 gap-8">
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Best
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Life
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Tomorrow
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Love
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Inspiring
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Hammer
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Love
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Inspiring
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Hammer
                    </span>
                  </label>
                </div>
                <h1 className="px-[2vh] cursor-pointer text-[4vw] lg:text-[1.10vw] underline quicksandFont font-semibold">
                  Show all
                </h1>
              </div>

              {/* TAGS END */}

              {/* TOPICS START */}
              <div className="py-[10vh] flex  items-center px-[2.70vw] space-x-4 w-full h-[12vh] ">
                <h1 className="font-medium text-[5vw] lg:text-[1.80vw]">
                  Topics
                </h1>
                {/* input div button start */}

                {inputField3 ? null : (
                  <div
                    onClick={handleInputField3}
                    className="py-1 cursor-pointer px-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" text-[#E0E0E0] mx-1 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                )}

                {inputField3 ? (
                  <div className="border-[1px] border-[#E0E0E0]  flex items-center bg-white rounded-[5px] h-[6vh] w-[55vw] lg:w-[15vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" text-[#E0E0E0] mx-1 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      className="placeholder:text-[#E0E0E0] placeholder:font-medium font-medium w-[40vw] lg:w-[10vw] outline-none"
                      type="text"
                      placeholder="Search in author"
                    />
                  </div>
                ) : null}

                {/* input div button end */}
              </div>
              <div className="items-center justify-center  px-[2vw] w-full h-auto grid grid-cols-3 gap-8">
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      Islamic
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      Romance
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      Inspirational
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Entrprenuer
                    </span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Emotional
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Fav
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      {" "}
                      Entrprenuer
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      Emotional
                    </span>
                  </label>
                </div>{" "}
                <div className="">
                  <label>
                    <input
                      type="checkbox"
                      className="w-[4vw] h-[4vh] lg:w-[3vw] lg:h-[3vh] accent-pink-500"
                    />{" "}
                    <span className="font-medium text-[4vw] lg:text-[1.20vw]">
                      Fav
                    </span>
                  </label>
                </div>
                <h1 className="px-[2vh] cursor-pointer text-[4vw] lg:text-[1.10vw] underline quicksandFont font-semibold">
                  Show all
                </h1>
              </div>

              {/* TOPICS END */}
            </div>
          </div>
          <div className="lg:relative fixed lg:bottom-0 bottom-[7%] bg-white flex border-t-[2px] border-[#F2F2F2] items-center justify-around lg:justify-between px-[2vw] w-full h-[10vh] lg:h-[12vh] ">
            <h1 className="text-[4vw] lg:text-[1.50vw] font-bold cursor-pointer text-[#828282] underline  font-semibold">
              Clear all
            </h1>
            <button
              onClick={onc}
              className="  font-bold bg-[#FF3294] text-white px-3 py-3 lg:px-4 lg:py-4 rounded-[5px]"
            >
              Show 400+ screenshots
            </button>
          </div>
        </div>
      </div>
      {/* filter modal end */}
    </>
  );
}

export default FilterModal;
