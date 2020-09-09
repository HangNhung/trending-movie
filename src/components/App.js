import React, { useState, useEffect } from "react";
import Slideshow from "../components/Slideshow";
import CustomModalReview from "./CustomModalReview";
import CustomModalMovie from "./CustomModalMovie";
import Image from "../assets/advanture.png";
import Image1 from "../assets/advanture1.png";
import Image2 from "../assets/advanture2.png";
import ArrowSVG from "../assets/mdi_arrow-right.svg";
import MagnifySVG from "../assets/mdi_magnify.svg";
import GridSVG from "../assets/mdi_view-grid.svg";
import LogoName from "../assets/tmdb 1.svg";

export default function App() {
  const [isShowReview, setIsShowReview] = useState(false);
  const [isShowMovie, setIsShowMovie] = useState(false);

  return (
    <div>
      <div className="absolute z-0 w-full h-full flex">
        <div className="w-full lg:w-2/3 xl:w-2/3 filter-blur bg-hero-pattern bg-no-repeat bg-cover h-full"></div>
        <div className="hidden lg:block xl:block bg-lighter w-1/3 h-full">
          <div className="text-center w-1/3 fixed bottom-0">
            <div className="text-white text-17xl leading-none font-poppins ">
              01
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-20 flex w-full px-8 lg:px-16 py-8">
        <div className="w-full">
          <div className="text-xs text-white">TRENDING</div>
          <div className="bg-red-700 w-16 text-center text-xs text-white">
            MOVIES
          </div>
          <div className="flex items-end fixed bottom-0">
            <span className="text-white text-base font-medium mr-2">
              Powered by
            </span>
            <LogoName className="inline mb-1" alt="logo-name" />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-end">
            <MagnifySVG alt="magnify" className="mr-4 hover:cursor-pointer" />
            <GridSVG
              alt="view-grid"
              className="hover:cursor-pointer"
              onClick={() => setIsShowMovie(true)}
            />
          </div>
        </div>
      </div>

      <div className="absolute z-10 flex w-full h-full overflow-hidden">
        <div className="w-full lg:w-2/3 xl:w-2/3 px-8 py-24 lg:px-16 lg:py-32 overflow-y-auto lg:overflow-hidden xl:overflow-hidden">
          <div className="lg:hidden xl:hidden w-full h-full flex flex-col mb-8">
            <Slideshow
              isMobile={true}
              images={[`${Image}`, `${Image1}`, `${Image2}`]}
            />
          </div>
          <div className="w-full lg:w-2/3 xl:w-2/3">
            <div className="text-red-lighter text-xl lg:text-2xl">
              MARVEL STUDIOS
            </div>
            <div className="text-white text-4xl lg:text-6xl font-medium leading-snug lg:leading-11 w-full lg:w-8">
              Avengers: Endgame
            </div>
            <div className="leading-normal text-white text-sm md:text-md lg:text-lg xl:text-xl py-5">
              The grave course of events set in motion by Thanos that wiped out
              half the universe and fractured the Avengers ranks compels the
              remaining Avengers to take one final stand in Marvel Studios'
              grand conclusion to twenty-two films, "Avengers: Endgame."
            </div>
            <div className="w-full lg:w-4/6 xl:w-4/6 pb-6">
              <hr />
            </div>
            <div className="flex flex-wrap w-full text-sm md:text-md lg:text-lg xl:text-xl">
              <div className="w-1/2 mb-2">
                <div className="text-white text-opacity-50">Release Date</div>
                <div className="text-white">April 22, 2019</div>
              </div>
              <div className="w-1/2 mb-2">
                <div className="text-white text-opacity-50">Runtime</div>
                <div className="text-white">03h 02m</div>
              </div>
              <div className="w-1/2 mb-2">
                <div className="text-white text-opacity-50">Budget</div>
                <div className="text-white">356 milion USD</div>
              </div>
              <div className="w-1/2 mb-2">
                <div className="text-white text-opacity-50">Revenue</div>
                <div className="text-white">$2.7897 bilion</div>
              </div>
            </div>
            <div
              className="btn-review my-8"
              onClick={() => setIsShowReview(true)}
            >
              <button className="text-red-strong text-sm md:text-md lg:text-lg xl:text-xl font-medium mb-2 pr-2">
                Read reviews
              </button>
              <ArrowSVG className="inline" alt="arror_right" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block xl:block w-1/3 py-32 flex flex-col">
          <Slideshow
            devicesMobile={true}
            images={[`${Image}`, `${Image1}`, `${Image2}`]}
          />
        </div>
      </div>

      <CustomModalReview
        isShowing={isShowReview}
        onRequestClose={() => setIsShowReview(false)}
      />

      <CustomModalMovie
        isShowing={isShowMovie}
        onRequestClose={() => setIsShowMovie(false)}
      />
    </div>
  );
}
