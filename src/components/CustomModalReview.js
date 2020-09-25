import React, { useState } from "react";
import CloseSVG from "../assets/mdi_close.svg";

function CustomModalReview({ data = {}, isShowing, onRequestClose }) {
  const showHideClassName = isShowing ? "block" : "hidden";
  const [isReadFull, setIsReadFull] = useState(false);

  function handleClick() {
    setIsReadFull(!isReadFull);
  }

  return (
    <div className={showHideClassName}>
      <div
        style={{ top: "50%", left: "50%", margin: "-15% 0 0 -25%" }}
        className="absolute top-1/2 left-1/2 w-1/2 z-30 px-8 lg:px-16 flex flex-col h-1/2"
      >
        <div className="bg-nero w-full overflow-y-scroll">
          <div className="flex flex-row justify-between px-4 py-4 lg:px-8 lg:py-2 border-b-2 border-white border-opacity-25">
            <div className="text-white text-sm w-3/4">
              Showing {data.length} lastes review for Movie
            </div>
            <div className="cursor-pointer">
              <CloseSVG onClick={onRequestClose} />
            </div>
          </div>
          <div className="flex flex-wrap">
            {data.length !== 0 ? (
              data.map((item, i) => (
                <div
                  key={i}
                  className="w-full px-8 py-4 lg:px-16 lg:py-8 text-white border-soild border-white border border-opacity-10"
                >
                  <div className="text-red-strong text-2xl font-bold font-sans leading-7 py-2">
                    {item.author}
                  </div>
                  <div
                    className={`${
                      !isReadFull ? "truncate" : ""
                    } text-white text-sm font-sans leading-6`}
                  >
                    {item.content}
                  </div>
                  <div
                    className="text-red-strong text-sm font-bold font-sans leading-6 py-2 float-right hover:cursor-pointer"
                    onClick={handleClick}
                  >
                    {!isReadFull ? "Read full reviews" : "Collapse"}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white">No reviews</div>
            )}
          </div>
        </div>
        ;
      </div>
    </div>
  );
}

export default CustomModalReview;
