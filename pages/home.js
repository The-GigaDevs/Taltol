import Head from "next/head";
import { emojiData } from "../components/Emojis";
import MoodEmojiBox from "../components/MoodEmojiBox";
import Navbar from "../components/Navbar";
import QuoteCard from "../components/QuoteCard";
import { Topics } from "../components/TopicsData";
import { CardData } from "../components/QuoteCardData";
import FooterTabMobile from "../components/FooterTabMobile";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAJA-ow2GKKU-ht6eaGCMyokJgIPq8tzd8",
  authDomain: "taltol-eb30d.firebaseapp.com",
  projectId: "taltol-eb30d",
  storageBucket: "taltol-eb30d.appspot.com",
  messagingSenderId: "947676162010",
  appId: "1:947676162010:web:0e0e633fa03afb674e42e3",
  measurementId: "G-QP1PLZ1WT1",
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "webaccess");

export default function Home() {
  const [secure, setSecure] = useState();
  const [text, setText] = useState();
  useEffect(() => {
    //get collection data
    getDocs(colRef).then((res) => {
      let names = [];
      res.docs.forEach((doc) => {
        names.push({ ...doc.data(), id: doc.id });
      });
      setSecure(names[0].protectedRouter);
      setText(names[0].alert);
    });
  }, []);
  return (
    <>
      {secure ? (
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <Navbar />
          <div className=" flex flex-col items-center justify-center w-[100vw] h-[35vh]">
            <div className="w-[80%] h-[20%] flex justify-start items-center">
              <h1 className="text-left font-bold text-[5vw] md:text-[1.70vw]">
                How is your mood today?
              </h1>
            </div>
            <div className="md:flex hidden   brdrEmojiBfr bg-[#F5F5F5] w-[80%] h-[15%]">
              {emojiData.map((item, key) => (
                <MoodEmojiBox
                  key={key}
                  emoji={item.emoji}
                  hoverEmoji={item.hoverState}
                  emojiText={item.text}
                />
              ))}
            </div>

            <div className=" md:hidden flex brdrEmojiBfr bg-[#F5F5F5] w-[90%] h-[15%]">
              {emojiData.slice(0, 9).map((item, key) => (
                <>
                  <MoodEmojiBox
                    key={key}
                    emoji={item.emoji}
                    hoverEmoji={item.hoverState}
                    emojiText={item.text}
                  />
                </>
              ))}
            </div>
            <div className="lg:hidden flex">
              <select
                className="font-bold text-[4vw] md:text-[1.10vw] bg-transparent text-[#BDBDBD] outline-none"
                name=""
                id=""
              >
                <option value="">all moods</option>
                {emojiData.slice(9, 20).map((i, key) => (
                  <option key={key} value="">
                    {i.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center  h-auto w-[100vw] ">
            <div className=" flex items-center justify-between  w-[80%] h-[7vh]">
              <select
                className="font-bold text-[4vw] md:text-[1.10vw] bg-transparent text-[#BDBDBD] outline-none"
                name=""
                id=""
              >
                <option value="">Top 100 picked quotes this month</option>
                <option value="">Top 20 picked quotes for Elon Musk</option>
                <option value="">Top 20 picked quotes for Jeff Besos</option>
                <option value="">Top 20 picked quotes for Elon Musk</option>
              </select>
            </div>

            <div className="  flex md:flex-row items-center md:items-start justify-center  flex-col h-auto w-[80%]">
              <div className=" items-center justify-center  gap-1 gap-x-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-[2vh] px-[1vw] w-[80%]  h-auto">
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

            <div className="flex justify-center items-center w-full h-[5vh]">
              <h1 className="text-[1.14vw] text-[#828282] font-bold">
                Loading more....
              </h1>
            </div>

            <div className="py-[4vh]  w-[80%] h-[20vh] ">
              <div className=" bg-[#E0E0E0] w-full h-[0.20vh]"></div>
              <div className="flex md:flex-row flex-col justify-between items-start my-[1vh] w-full h-[20vh]">
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
                  <p className="text-[#828282] font-normal text-[3vw] md:text-[1vw]">
                    © Taltol, Inc. 2022. All rights reserved
                  </p>
                </div>
                <div className="text-white">HALO jkabsdhbashdkjbashdbhads</div>
              </div>
            </div>
          </div>
          <FooterTabMobile />
        </>
      ) : (
        <h1 className="text-center font-bold text-[4vw]">{text}</h1>
      )}
    </>
  );
}
