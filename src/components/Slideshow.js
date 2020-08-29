import React, { useState, useEffect } from "react";
import FacebookSVG from "../assets/mdi_facebook.svg";
import InstagramSVG from "../assets/mdi_instagram.svg";
import TwitterSVG from "../assets/mdi_twitter.svg";

export default function Slideshow({ images = [] }) {
  // thumbnails: holds the images array
  const [thumbnails, setThumnails] = useState([]);
  // currentSlide: holds the index of the current slide in the thumbnails array
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideStyle, setNextSlideStyle] = useState({});
  // currentSlideStyle: use it for setting the background-image of the "slide-thumbnail" div
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect(() => {
    setThumnails(images);
    setCurrentSlideStyle({
      backgroundImage: "url('" + images[currentSlide] + "')",
    });

    if (currentSlide === images.length - 1) {
      setNextSlideStyle({
        backgroundImage: "url('" + images[0] + "')",
      });
    } else {
      setNextSlideStyle({
        backgroundImage: "url('" + images[currentSlide + 1] + "')",
      });
    }
  }, [images, currentSlide]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      // setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <>
      <section className="h-full py-32">
        <div className="flex flex-row justify-between items-center h-full">
          <div
            style={currentSlideStyle}
            className="bg-cover bg-left bg-no-repeat w-2/3 h-full"
          ></div>
          <div
            style={nextSlideStyle}
            className="bg-cover bg-left bg-no-repeat w-1/6 h-img-next-slide"
          ></div>
        </div>
        <div className="flex flex-row pt-2">
          <FacebookSVG className="mr-2" alt="facebook" />
          <InstagramSVG className="mr-2" alt="instagram" />
          <TwitterSVG alt="twitter_icon" />
        </div>
        <div className="fixed bottom-0 inline-flex items-center py-2 mb-5">
          <div
            className={
              "text-white text-xl pr-2 font-medium font-bold py-2 " +
              (currentSlide === 0
                ? "text-white text-opacity-50 cursor-not-allowed"
                : "cursor-pointer")
            }
            onClick={previous}
          >
            Prev
          </div>
          <hr className="w-40" />
          <div
            className={
              "text-red-strong text-xl pl-2 font-medium font-bold py-2 " +
              (currentSlide === thumbnails.length - 1
                ? "text-red-strong text-opacity-50 cursor-not-allowed"
                : "cursor-pointer")
            }
            onClick={next}
          >
            Next
          </div>
        </div>
      </section>
    </>
  );
}
