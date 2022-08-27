import React, { useState } from "react";

function CollectionModal({ onc, doneOnc }) {
  const [createNewColl, setCreateNewColl] = useState();

  const handleNewColl = () => {
    setCreateNewColl(!createNewColl);
  };

  return (
    <>
      {/* collectionModal start */}
      <div className="z-40 bg-opacity-80 bg-black w-[100vw] h-[150vh] absolute">
        <div className="w-[95%] h-[60vh]  lg:h-[80vh] lg:w-[45vw] top-[20%] lg:top-[10%] left-2 lg:left-[26%] z-50 absolute bg-[#FFFFFF] modalShadow">
          {/* topbar */}
          <div className="px-[1vw] border-b-2 border-[#F2F2F2] flex items-center justify-between w-full h-[8vh]">
            <div
              onClick={onc}
              className="animatedIcon cursor-pointer py-2 px-2"
            >
              <svg
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
            </div>
            <h1 className="font-medium text-[4vw] lg:text-[1.30vw]">
              Add this quote to a collection
            </h1>{" "}
            <p className="text-white">.</p>
          </div>
          {/* topbar end */}

          <div className="w-full h-[80%] ">
            <div className="flex items-center w-full h-[15%]  py-[2vh] px-[2vw]">
              {/* input div box start */}
              <div className="border-[1px] border-[#E0E0E0]  rounded-[5px] justify-evenly   w-[40vw] lg:w-[15vw] bg-white flex items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                    fill="#E0E0E0"
                  />
                </svg>
                <input
                  className="text-[#BDBDBD] placeholder:text-[#BDBDBD] outline-none text-[3vw] lg:text-[0.90vw] w-[35vw] lg:w-[12vw] h-[4vh] lg:h-[5vh] "
                  type="text "
                  placeholder="Search for a collection"
                />
              </div>
              {/* input div box end */}
            </div>

            <div className="flex flex-col justify-around items-center w-[100%] h-[75%] lg:h-[85%] ">
              <div className="flex justify-around items-center w-[100%] h-[26%] ">
                <div className="flex items-start flex-col justify-center border-[1px] border-[#E0E0E0] px-[2.40vw] hover:bg-[#F2F2F2] py-1 w-[45%] h-[10vh] lg:h-[15vh] rounded-[5px] bg-white">
                  <h1 className="font-bold text-[3vw] lg:text-[1.10vw]">
                    Inspirational Quotes
                  </h1>
                  <p className="text-[#BDBDBD] text-[2vw] lg:text-[1.05vw]">
                    7 quotes
                  </p>

                  <p className="text-[#BDBDBD] py-[1vw] lg:py-[0.40vw] text-[1.80vw] lg:text-[1vw]">
                    updated 5 months ago
                  </p>
                </div>{" "}
                <div className="flex items-start flex-col justify-center border-[1px] border-[#E0E0E0] px-[2.40vw] hover:bg-[#F2F2F2] py-1 w-[45%] h-[10vh] lg:h-[15vh] rounded-[5px] bg-white">
                  <h1 className="font-bold text-[3vw] lg:text-[1.10vw]">
                    Inspirational Quotes
                  </h1>
                  <p className="text-[#BDBDBD] text-[2vw] lg:text-[1.05vw]">
                    7 quotes
                  </p>

                  <p className="text-[#BDBDBD] py-[1vw] lg:py-[0.40vw] text-[1.80vw] lg:text-[1vw]">
                    updated 5 months ago
                  </p>
                </div>
              </div>
              <div className="flex justify-around items-center w-[100%] h-[26%] ">
                <div className="flex items-start flex-col justify-center border-[1px] border-[#E0E0E0] px-[2.40vw] hover:bg-[#F2F2F2] py-1 w-[45%] h-[10vh] lg:h-[15vh] rounded-[5px] bg-white">
                  <h1 className="font-bold text-[3vw] lg:text-[1.10vw]">
                    Inspirational Quotes
                  </h1>
                  <p className="text-[#BDBDBD] text-[2vw] lg:text-[1.05vw]">
                    7 quotes
                  </p>

                  <p className="text-[#BDBDBD] py-[1vw] lg:py-[0.40vw] text-[1.80vw] lg:text-[1vw]">
                    updated 5 months ago
                  </p>
                </div>{" "}
                <div className="flex items-start flex-col justify-center border-[1px] border-[#E0E0E0] px-[2.40vw] hover:bg-[#F2F2F2] py-1 w-[45%] h-[10vh] lg:h-[15vh] rounded-[5px] bg-white">
                  <h1 className="font-bold text-[3vw] lg:text-[1.10vw]">
                    Inspirational Quotes
                  </h1>
                  <p className="text-[#BDBDBD] text-[2vw] lg:text-[1.05vw]">
                    7 quotes
                  </p>

                  <p className="text-[#BDBDBD] py-[1vw] lg:py-[0.40vw] text-[1.80vw] lg:text-[1vw]">
                    updated 5 months ago
                  </p>
                </div>
              </div>
              <div className="flex justify-around items-center w-[100%] h-[26%] ">
                <div className="flex items-start flex-col justify-center border-[1px] border-[#E0E0E0] px-[2.40vw] hover:bg-[#F2F2F2] py-1 w-[45%] h-[10vh] lg:h-[15vh] rounded-[5px] bg-white">
                  <h1 className="font-bold text-[3vw] lg:text-[1.10vw]">
                    Inspirational Quotes
                  </h1>
                  <p className="text-[#BDBDBD] text-[2vw] lg:text-[1.05vw]">
                    7 quotes
                  </p>

                  <p className="text-[#BDBDBD] py-[1vw] lg:py-[0.40vw] text-[1.80vw] lg:text-[1vw]">
                    updated 5 months ago
                  </p>
                </div>
                <div className="flex items-start flex-col justify-center border-[1px] border-[#E0E0E0] px-[2.40vw] hover:bg-[#F2F2F2] py-1 w-[45%] h-[10vh] lg:h-[15vh] rounded-[5px] bg-white">
                  <h1 className="font-bold text-[3vw] lg:text-[1.10vw]">
                    Inspirational Quotes
                  </h1>
                  <p className="text-[#BDBDBD] text-[2vw] lg:text-[1.05vw]">
                    7 quotes
                  </p>

                  <p className="text-[#BDBDBD] py-[1vw] lg:py-[0.40vw] text-[1.80vw] lg:text-[1vw]">
                    updated 5 months ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* topbar */}
          <div className="px-[2vw] lg:px-[1vw] lg:-mt-0 -mt-[5vh] border-t-2 border-[#F2F2F2] flex items-center justify-between w-full h-[8vh]">
            <button
              onClick={doneOnc}
              className=" quicksandFont font-semibold bg-[#FF3294] text-white px-4 py-2 rounded-[5px]"
            >
              Done
            </button>
            <h1
              onClick={handleNewColl}
              className="cursor-pointer text-[#828282] underline quicksandFont font-semibold"
            >
              Create a new collection
            </h1>
          </div>
          {/* topbar end */}
        </div>
        {/* collectionModal end */}

        {/* create new collection modal start */}
        {createNewColl ? (
          <div className="flex justify-center items-center z-50 bg-opacity-80 bg-black w-[100vw] h-[150vh] absolute">
            <div className="w-[95%] h-[42vh]  lg:h-[45vh] lg:w-[45vw] top-[20%] lg:top-[20%] left-2 lg:left-[26%] z-60 absolute bg-white ">
              {/* topbar */}
              <div className="px-[1vw] border-b-2 border-[#F2F2F2] flex items-center justify-between w-full h-[8vh]">
                <div
                  onClick={handleNewColl}
                  className="animatedIcon cursor-pointer py-2 px-2"
                >
                  <svg
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
                </div>
                <h1 className="font-medium text-[4vw] lg:text-[1.30vw]">
                  Create a new collection
                </h1>{" "}
                <p className="text-white">.</p>
              </div>
              {/* topbar end */}

              <div className="px-[2vw] flex justify-start items-center  w-full h-[26vh]">
                <div className="flex  justify-start items-center w-[90%] h-[10vh] border-b-2 border-[#E0E0E0] ">
                  <input
                    className="lg:text-[1.40vw] lg:placeholder:text-[1.10vw] text-[5vw] placeholder:text-[5vw] placeholder:text-[#BDBDBD] bg-transparent outline-none "
                    type="text"
                    placeholder="Choose Name"
                  />
                </div>
              </div>
              {/* topbar */}
              <div className="px-[2vw] lg:px-[1vw] lg:-mt-0 -mt-[5vh] border-t-2 border-[#F2F2F2] flex items-center justify-between w-full h-[11vh]">
                <button
                  onClick={doneOnc}
                  className=" quicksandFont font-semibold bg-[#FF3294] text-white px-4 py-3 rounded-[5px]"
                >
                  Create Collection
                </button>
              </div>
              {/* topbar end */}
            </div>
          </div>
        ) : null}
        {/* create new collection modal end */}
      </div>
    </>
  );
}

export default CollectionModal;
