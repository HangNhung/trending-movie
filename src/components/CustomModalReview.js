import React, { useState } from "react";
import CloseSVG from "../assets/mdi_close.svg";

function CustomModalReview({ data = {}, isShowing, onRequestClose }) {
  const showHideClassName = isShowing ? "block" : "hidden";
  const textReviews = "Read full reviews";

  function handleClick(index) {
    let elementIndex = document.getElementById(`index${index}`);
    let elementText = document.getElementById(`textReviews${index}`);
    if (elementIndex.classList.contains("truncate")) {
      elementIndex.classList.remove("truncate");
      elementText.innerHTML = "Collapse";
    } else {
      elementIndex.classList.add("truncate");
      elementText.innerHTML = "Read full reviews";
    }
  }

  return (
    <div
      className={
        showHideClassName +
        " fixed bg-nero w-3/4 lg:w-1/2 xl:w-1/2 top-1/4 left-1/8 lg:top-1/8 xl:top-1/8 lg:left-1/4 xl:left-1/4 z-30"
      }
    >
      <div className="flex flex-row justify-between px-4 py-4 lg:px-8 lg:py-2 border-b-2 border-white border-opacity-25">
        <div className="text-white text-sm w-3/4">
          Showing {data.length} lastes review for Movie
        </div>
        <div className="cursor-pointer">
          <CloseSVG onClick={onRequestClose} />
        </div>
      </div>
      <div
        style={{ maxHeight: "600px" }}
        className="px-8 py-8 flex flex-col overflow-y-scroll"
      >
        {data.length !== 0 ? (
          data.map((item, i) => (
            <div key={item + i}>
              <div className="text-red-strong text-2xl font-bold font-sans leading-7 py-2">
                {item.author}
              </div>
              <div
                id={`index${i}`}
                className="truncate text-white text-sm font-sans leading-6"
              >
                {item.content}
              </div>
              <div
                id={`textReviews${i}`}
                className="text-red-strong text-sm font-bold font-sans leading-6 py-2 float-right hover:cursor-pointer"
                onClick={() => handleClick(i)}
              >
                {textReviews}
              </div>
            </div>
          ))
        ) : (
          <div className="text-white">No reviews</div>
        )}
      </div>
    </div>
  );
}

export default CustomModalReview;
