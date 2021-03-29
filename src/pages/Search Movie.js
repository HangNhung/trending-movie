import React from "react";
import { useLocation } from "react-router-dom";
const queryString = require("query-string");
import * as common from "../const/common";
import * as api from "../libs/fetcher";

const CardMovie = ({ poster_path, title, release_date, overview }) => {
  return (
    <div className="flex m-4 shadow-lg">
      <div className="w-32">
        <img
          className="w-full h-full"
          src={`${common.url_poster}/${poster_path}`}
          alt="image movie"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{release_date}</div>
        <div>{overview}</div>
      </div>
    </div>
  );
};

export default function SearchMovie() {
  const location = useLocation();
  const { query } = queryString.parse(location.search);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    api
      .fetcher(
        `${common.url}/search/movie?api_key=${common.apiKey}&language=en-US&query=${query}&include_adult=false`
      )
      .then((res) => {
        console.log("Res", res);
        setData(res.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex-1 px-8 lg:px-16">
      <div className="w-full h-screen overflow-y-scroll flex flex-wrap">
        {data.map((item, i) => (
          <div id="item" key={item.id} className="w-full">
            <CardMovie {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
