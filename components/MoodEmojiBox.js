import React, { useState } from "react";
import Image from "next/image";
function MoodEmojiBox({ emoji, hoverEmoji, emojiText }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className=" tooltip relative flex py-2 px-2 hover:bg-[#FF3294] cursor-pointer justify-center items-center border-[#e0e0e0] border-r-2 md:w-[30vw] w-[30vw] h-[100%]"
      >
        <span className="font-extrabold tooltiptext">{emojiText}</span>
        {isShown ? (
          <Image src={hoverEmoji} alt="Hover Image"></Image>
        ) : (
          <Image src={emoji} alt="Emoji image"></Image>
        )}
      </div>
    </>
  );
}

export default MoodEmojiBox;
