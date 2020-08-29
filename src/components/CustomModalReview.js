import React from "react";
import CloseSVG from "../assets/mdi_close.svg";

function CustomModalReview({ isShowing, onRequestClose }) {
  const showHideClassName = isShowing ? "block" : "hidden";

  return (
    <div className={showHideClassName}>
      <div className="absolute w-full h-full z-30 py-8 px-16">
        <div className="bg-black w-full h-full">
          <div className="flex flex-row justify-between px-8 py-2 border-b-2 border-white border-opacity-25">
            <div className="text-white text-sm">
              Showing 20 lastes review for Avengers: Endgame
            </div>
            <div>
              <CloseSVG onClick={onRequestClose} />
            </div>
          </div>
          <div className="overflow-y-scroll h-scroll-review flex flex-wrap">
            {Array.apply(null, { length: 20 }).map((e, i) => (
              <div
                key={i}
                className="w-1/2 h-52 px-16 py-8 text-white border-soild border-white border border-opacity-10"
              >
                <div className="text-red-strong text-2xl font-bold font-sans leading-7 py-2">
                  Frank Ochieng
                </div>
                <div className="text-white text-sm font-sans leading-6">
                  Summertime 2016 has not been very kind to DC Comics-based
                  personalities looking to shine consistently like their big
                  screen Marvel Comics counterparts. Following the super-sized
                  dud that was Batman v. Superman: Dawn of Justice released a
                  few months...
                </div>
                <div className="text-red-strong text-sm font-bold font-sans leading-6 py-2 float-right hover:cursor-pointer">
                  Read full reviews
                </div>
              </div>
            ))}
          </div>
        </div>
        ;
      </div>
    </div>
  );
}

export default CustomModalReview;
