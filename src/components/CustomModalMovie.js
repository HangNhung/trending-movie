import React from "react";
import CloseSVG from "../assets/mdi_close.svg";
import MagnifySVG from "../assets/mdi_magnify.svg";
import Image from "../assets/advanture.png";
import ArrowSVG from "../assets/mdi_arrow-right.svg";

function CustomModalMovie({ isShowing, onRequestClose }) {
  const showHideClassName = isShowing ? "block" : "hidden";

  return (
    <div
      className={
        showHideClassName +
        " fixed bg-nero w-full h-full z-30 py-8 inset-0 flex flex-col"
      }
    >
      <div className="flex flex-row justify-between px-8 lg:px-16">
        <div className="mb-8">
          <div className="font-serif text-xs text-white">TRENDING</div>
          <div className="bg-red-700 w-16 text-center font-serif text-xs text-white">
            MOVIES
          </div>
        </div>
        <div className="flex">
          <MagnifySVG alt="magnify" className="mr-4 hover:cursor-pointer" />
          <CloseSVG onClick={onRequestClose} className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="text-white text-sm pb-4 px-8 lg:px-16">
        Showing 20 lastes trending movies:
      </div>
      <div className="overflow-y-scroll flex-1 px-8 lg:px-16">
        <div className="w-full flex flex-wrap">
          {Array.apply(null, { length: 20 }).map((e, i) => (
            <div
              id="item"
              key={i}
              className="relative w-1/2 lg:w-1/4 pr-8 mb-8"
            >
              <div
                className="item-movie-wrapper relative overflow-hidden z-40"
                style={{ paddingTop: "150%" }}
              >
                <img
                  src={Image}
                  className="block absolute w-full h-full inset-0 object-cover"
                />

                <div className="hide relative z-50">
                  <div className="absolute bg-gradient-to-b from-transparent to-black h-full w-full flex flex-col justify-end px-4 pb-8">
                    <div className="text-white text-xl font-bold leading-6 pb-2">
                      Avengers: Endgame
                    </div>
                    <div className="pb-2">
                      <button className="text-red-strong text-base font-medium pr-2">
                        View Details
                      </button>
                      <ArrowSVG className="inline " alt="arror_right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomModalMovie;
