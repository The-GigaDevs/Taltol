import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const SharePage = ({place, id}) => {
  return (
      <button className="category-header-share-btn" onClick={()=> {
        if (navigator.share && window.matchMedia("(max-width: 767px)").matches) {
          navigator
            .share({
              url: `${window.location.href}`,
              title: "Taltol",
              text: "A quote website",
            })
            .then(() => {
              console.log("Shared YEEEE!!!!!");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          toast.info('Copied to clipboard!');
          return navigator.clipboard.writeText(`${window.location.href}`);
        }
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="18"
          viewBox="0 0 21 18"
          fill="none"
        >
          <path
            d="M12.8333 4.8V0L21 8.4L12.8333 16.8V11.88C7 11.88 2.91667 13.8 0 18C1.16667 12 4.66667 6 12.8333 4.8Z"
            fill="#828282"
          />
        </svg>
        Share this page
      </button>
  );
};

export default SharePage;
