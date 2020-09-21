import React, { useState, useEffect, useRef } from "react";
import FacebookSVG from "../assets/mdi_facebook.svg";
import InstagramSVG from "../assets/mdi_instagram.svg";
import TwitterSVG from "../assets/mdi_twitter.svg";

export default function Slideshow({
  isMobile,
  parentCallback,
  path,
  index,
  length,
}) {
  const [widthRenderItem, setWidthRenderItem] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const widthMovieImage = useRef(0);
  const urlImage = "https://image.tmdb.org/t/p/w440_and_h660_face";

  useEffect(() => {
    setCurrentSlide(index);
  }, [index]);

  function previous() {
    parentCallback(currentSlide - 1);
  }

  function next() {
    parentCallback(currentSlide + 1);
  }

  const onImgLoad = () => {
    setWidthRenderItem(-widthMovieImage.current.offsetWidth / 2 + "px");
  };

  return (
    <>
      <div className="flex-1 h-full">
        <div className="flex h-full lg:transform lg:-translate-x-1/2">
          <div className="w-full flex-shrink-0">
            <div className="relative h-full">
              {path[currentSlide] && (
                <img
                  ref={widthMovieImage}
                  onLoad={onImgLoad}
                  src={urlImage + path[currentSlide].poster_path}
                  className="inline-block absolute inset-0 object-cover h-full w-auto mx-auto my-auto"
                />
              )}
            </div>
          </div>
          <div className="hidden lg:block xl:block w-full flex-shrink-0 ml-16">
            <div style={{ top: "12.5%" }} className="relative h-3/4">
              {path[currentSlide] && (
                <img
                  ref={widthMovieImage}
                  onLoad={onImgLoad}
                  src={
                    currentSlide + 1 < 20
                      ? urlImage + path[currentSlide + 1].poster_path
                      : ""
                  }
                  className="inline-block absolute inset-0 object-cover h-full w-auto mx-auto my-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          transform: !isMobile ? `translateX(${widthRenderItem})` : null,
        }}
        className="justify-center lg:justify-start flex my-2"
      >
        <FacebookSVG className="mr-2" alt="facebook" />
        <InstagramSVG className="mr-2" alt="instagram" />
        <TwitterSVG alt="twitter_icon" />
      </div>
      <div
        style={{
          transform: !isMobile ? `translateX(${widthRenderItem})` : null,
        }}
        className="justify-center lg:justify-start lg:absolute lg:bottom-0 flex items-center"
      >
        <div
          className={
            "text-white text-sm md:text-md lg:text-lg xl:text-xl pr-2 font-medium font-bold " +
            (currentSlide === 0
              ? "text-white text-opacity-50 cursor-not-allowed"
              : "cursor-pointer")
          }
          onClick={previous}
        >
          Prev
        </div>
        <hr className="w-32 lg:w-40" />
        <div
          className={
            "text-red-strong text-sm md:text-md lg:text-lg xl:text-xl pl-2 font-medium font-bold " +
            (currentSlide === length
              ? "text-red-strong text-opacity-50 cursor-not-allowed"
              : "cursor-pointer")
          }
          onClick={next}
        >
          Next
        </div>
      </div>
    </>
  );
}
