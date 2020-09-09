import React, { useState, useEffect, useRef } from "react";
import FacebookSVG from "../assets/mdi_facebook.svg";
import InstagramSVG from "../assets/mdi_instagram.svg";
import TwitterSVG from "../assets/mdi_twitter.svg";

export default function Slideshow({ devicesMobile, images = [] }) {
  const [thumbnails, setThumnails] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState("");
  const [widthRenderItem, setWidthRenderItem] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const widthMovieImage = useRef(0);

  useEffect(() => {
    setThumnails(images);
    setIsMobile(devicesMobile);

    if (currentSlide === images.length - 1) {
      setNextSlide(0);
    } else {
      setNextSlide(currentSlide + 1);
    }
  }, [images, currentSlide]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function next() {
    if (currentSlide !== thumbnails.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
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
              <img
                ref={widthMovieImage}
                onLoad={onImgLoad}
                src={images[currentSlide]}
                className="inline-block absolute inset-0 object-cover h-full w-auto mx-auto my-auto"
              />
            </div>
          </div>
          <div className="hidden lg:block xl:block w-full flex-shrink-0 ml-16">
            <div style={{ top: "12.5%" }} className="relative h-3/4">
              <img
                src={images[nextSlide]}
                className="inline-block absolute inset-0 object-cover h-full w-auto mx-auto my-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          transform: isMobile ? `translateX(${widthRenderItem})` : null,
        }}
        className="justify-center lg:justify-start flex my-2"
      >
        <FacebookSVG className="mr-2" alt="facebook" />
        <InstagramSVG className="mr-2" alt="instagram" />
        <TwitterSVG alt="twitter_icon" />
      </div>
      <div
        style={{
          transform: isMobile ? `translateX(${widthRenderItem})` : null,
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
            (currentSlide === thumbnails.length - 1
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
