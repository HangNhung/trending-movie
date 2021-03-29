import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import CustomModalReview from "../components/CustomModalReview";
import CustomModalMovie from "../components/CustomModalMovie";
import * as Images from "../const/images";
import * as common from "../const/common";
import * as api from "../libs/fetcher";
import * as formatInfo from "../utils/formatMovieInfo";
import ArrowRight from "../assets/mdi_arrow-right.svg";
import MagnifySVG from "../assets/mdi_magnify.svg";
import GridSVG from "../assets/mdi_view-grid.svg";
import LogoName from "../assets/tmdb 1.svg";

export default function ListMovie() {
  const history = useHistory();
  const [isShowReview, setIsShowReview] = useState(false);
  const [isShowMovie, setIsShowMovie] = useState(false);
  const [listTrendingMovie, setListTrendingMovie] = useState({ items: [] });
  const [listReviewMovie, setlistReviewMovie] = useState({ items: [] });
  const [trendingMovieDetail, setTrendingMovieDetail] = useState({
    details: [],
  });
  const [indexMovie, setIndexMovie] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    api
      .fetcher(`${common.url}/trending/movie/day?api_key=${common.apiKey}`)
      .then((data) => {
        // console.log("listTrendingMovie", data.results);
        setListTrendingMovie({ items: data.results });

        api
          .fetcher(
            `${common.url}/movie/${data.results[0].id}?api_key=${common.apiKey}&language=en-US`
          )
          .then((dataDetails) => {
            setTrendingMovieDetail({ details: dataDetails });
            setIndexMovie(0);
          })
          .catch((err) => console.err("err", err));
      })
      .catch((err) => console.error("err", err));
  }, []);

  // get details movie when indexMovie change
  useEffect(() => {
    // get trending movie list
    if (listTrendingMovie.items[indexMovie]) {
      api
        .fetcher(
          `${common.url}/movie/${listTrendingMovie.items[indexMovie].id}?api_key=${common.apiKey}&language=en-US`
        )
        .then((dataDetails) => {
          setTrendingMovieDetail({ details: dataDetails });
        })
        .catch((err) => console.err("err", err));
      api
        .fetcher(
          `${common.url}/movie/${listTrendingMovie.items[indexMovie].id}/reviews?api_key=${common.apiKey}&language=en-US&page=1`
        )
        .then((reviews) => {
          setlistReviewMovie({ items: reviews.results });
        })
        .catch((err) => console.err("err", err));
    }
  }, [indexMovie]);

  const callbackFunction = (childData) => {
    setIndexMovie(childData);
  };

  const viewDetailsMovie = (indexMoview) => {
    setIsShowMovie(false);
    setIndexMovie(indexMoview);
  };

  const dataToDisplay = trendingMovieDetail.details;

  // search movie
  const handeQueryChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const searchMovice = () => {
    history.push({ pathname: "/search", search: `?query=${query}` });
  };

  return (
    <>
      {dataToDisplay && (
        <div>
          <div className="absolute z-0 w-full h-full flex">
            <div
              style={{
                backgroundImage: dataToDisplay.poster_path
                  ? `url('${Images.urlImage}${dataToDisplay.poster_path}`
                  : null,
              }}
              className="w-full lg:w-2/3 xl:w-2/3 filter-blur bg-no-repeat bg-cover h-full"
            ></div>
            <div className="hidden lg:block xl:block bg-lighter w-1/3 h-full">
              <div className="text-center w-1/3 fixed bottom-0">
                <div className="text-white text-17xl leading-none font-poppins ">
                  {indexMovie + 1 < 10
                    ? "0" + (indexMovie + 1).toString()
                    : (indexMovie + 1).toString()}
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
                <div className="border-2 border-black mx-2 p-2 rounded">
                  <input
                    className="bg-transparent focus:outline-none"
                    type="input"
                    value={query}
                    placeholder="Search"
                    onChange={handeQueryChange}
                  />
                </div>
                <MagnifySVG
                  alt="magnify"
                  className="mr-4 hover:cursor-pointer"
                  onClick={searchMovice}
                />
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
                  parentCallback={callbackFunction}
                  path={listTrendingMovie.items}
                  index={indexMovie}
                  length={listTrendingMovie.items.length - 1}
                />
              </div>
              <div className="w-full lg:w-2/3 xl:w-2/3">
                <div className="text-red-lighter text-xl lg:text-2xl">
                  {dataToDisplay.genres &&
                    dataToDisplay.genres.map((genre, indexGenre, genres) => {
                      if (indexGenre !== genres.length - 1) {
                        return genre.name + ", ";
                      }
                      return genre.name;
                    })}
                </div>
                <div className="text-white text-4xl lg:text-6xl font-medium leading-snug lg:leading-11 w-full">
                  {dataToDisplay.title}
                </div>
                <div className="leading-normal text-white text-sm md:text-md lg:text-lg xl:text-xl py-5">
                  {dataToDisplay.overview}
                </div>
                <div className="w-full lg:w-4/6 xl:w-4/6 pb-6">
                  <hr />
                </div>
                <div className="flex flex-wrap w-full text-sm md:text-md lg:text-lg xl:text-xl">
                  <div className="w-1/2 mb-2">
                    <div className="text-white text-opacity-50">
                      Release Date
                    </div>
                    <div className="text-white">
                      {formatInfo.formatReleaseDate(dataToDisplay.release_date)}
                    </div>
                  </div>
                  <div className="w-1/2 mb-2">
                    <div className="text-white text-opacity-50">Runtime</div>
                    <div className="text-white">
                      {formatInfo.formatRuntime(dataToDisplay.runtime)}
                    </div>
                  </div>
                  <div className="w-1/2 mb-2">
                    <div className="text-white text-opacity-50">Budget</div>
                    <div className="text-white">
                      {formatInfo.formatBudget(dataToDisplay.budget)}
                    </div>
                  </div>
                  <div className="w-1/2 mb-2">
                    <div className="text-white text-opacity-50">Revenue</div>
                    <div className="text-white">
                      {formatInfo.formatRevenue(dataToDisplay.revenue)}
                    </div>
                  </div>
                </div>
                <div
                  className="btn-review my-8"
                  onClick={() => setIsShowReview(true)}
                >
                  <button className="text-red-strong text-sm md:text-md lg:text-lg xl:text-xl font-medium mb-2 pr-2">
                    Read reviews
                  </button>
                  <ArrowRight className="inline" alt="arror_right" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block xl:block w-1/3 py-32 flex flex-col">
              {listTrendingMovie.items && (
                <Slideshow
                  parentCallback={callbackFunction}
                  path={listTrendingMovie.items}
                  index={indexMovie}
                  length={listTrendingMovie.items.length - 1}
                />
              )}
            </div>
          </div>
          {listReviewMovie && (
            <CustomModalReview
              data={listReviewMovie.items}
              isShowing={isShowReview}
              onRequestClose={() => setIsShowReview(false)}
            />
          )}

          {listTrendingMovie && (
            <CustomModalMovie
              data={listTrendingMovie.items}
              isShowing={isShowMovie}
              onRequestClose={() => setIsShowMovie(false)}
              parentCallback={viewDetailsMovie}
            />
          )}
        </div>
      )}
    </>
  );
}
