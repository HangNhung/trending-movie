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
      <div className="filter-blur bg-hero-pattern bg-no-repeat bg-cover absolute z-0 w-8/12 h-full"></div>
      <div className="absolute w-full z-10 flex flex-row h-full">
        <div className="w-2/3">
          <div className="pl-16 py-8 h-screen flex flex-wrap items-between">
            <div>
              <div className="text-xs text-white">TRENDING</div>
              <div className="bg-red-700 w-16 text-center text-xs text-white">
                MOVIES
              </div>
            </div>

            <div>
              <div className="text-red-lighter text-2xl ">MARVEL STUDIOS</div>
              <div className="text-white text-6xl font-medium leading-11 w-8">
                Avengers: Endgame
              </div>
              <div className="leading-normal text-white text-base w-4/6 py-5">
                The grave course of events set in motion by Thanos that wiped
                out half the universe and fractured the Avengers ranks compels
                the remaining Avengers to take one final stand in Marvel
                Studios' grand conclusion to twenty-two films, "Avengers:
                Endgame."
              </div>
              <div className="w-4/6 pb-6">
                <hr />
              </div>
              <div className="flex flex-wrap w-4/6">
                <div className="w-1/2 mb-2">
                  <div className="text-white text-opacity-50 text-sm">
                    Release Date
                  </div>
                  <div className="text-white text-base">April 22, 2019</div>
                </div>
                <div className="w-1/2">
                  <div className="text-white text-opacity-50 text-sm">
                    Runtime
                  </div>
                  <div className="text-white text-base">03h 02m</div>
                </div>
                <div className="w-1/2">
                  <div className="text-white text-opacity-50 text-sm">
                    Budget
                  </div>
                  <div className="text-white text-base">356 milion USD</div>
                </div>
                <div className="w-1/2">
                  <div className="text-white text-opacity-50 text-sm">
                    Revenue
                  </div>
                  <div className="text-white text-base">$2.7897 bilion</div>
                </div>
              </div>
              <div
                className="btn-review h-8 mt-8"
                onClick={() => setIsShowReview(true)}
              >
                <button className="text-red-strong text-base font-medium pr-2">
                  Read reviews
                </button>
                <ArrowSVG className="inline" alt="arror_right" />
              </div>
            </div>

            <div className="fixed mb-5 bottom-0">
              <span className="text-white text-base font-medium mr-2">
                Powered by
              </span>
              <LogoName className="inline" alt="logo-name" />
            </div>
          </div>
        </div>

        {/* <!--slide--> */}
        <div className="bg-red-800 w-1/3 pr-6 pt-4">
          {/* <!--slide number--> */}
          <div className="text-center w-1/3 fixed -bottom-18">
            <div className="text-white text-17xl font-poppins ">01</div>
          </div>
        </div>
      </div>
      <div className="absolute w-full z-20 flex flex-row-reverse pr-16 pt-8">
        <GridSVG
          alt="view-grid"
          className="hover:cursor-pointer"
          onClick={() => setIsShowMovie(true)}
        />
        <MagnifySVG alt="magnify" className="mr-4 hover:cursor-pointer" />
      </div>
      <div className="absolute w-1/2 z-10 h-full bg-red right-0">
        {/* <!--icon search and expand--> */}
        <Slideshow images={[`${Image}`, `${Image1}`, `${Image2}`]} />
      </div>
      {/* Modal Reviews */}
      <CustomModalReview
        isShowing={isShowReview}
        onRequestClose={() => setIsShowReview(false)}
      />
      {/* Modal Movies */}
      <CustomModalMovie
        isShowing={isShowMovie}
        onRequestClose={() => setIsShowMovie(false)}
      />
    </div>
  );
}
