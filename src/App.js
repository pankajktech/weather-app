import { useState, useEffect } from "react";
import axios from "axios";

import ShowWeather from "./Components/ShowWeather";

const App = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [Inputcity, setInputCity] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    getWeatherDetails("Delhi");
  }, []);

  const getWeatherDetails = (city) => {
    if (!city) {
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[url(https://image.lexica.art/full_jpg/d3657b96-284b-4555-bcbd-3bccb78f5705)] min-h-screen  bg-cover bg-center">
      <div className="flex flex-col items-center justify-center w-full min-h-screen backdrop-blur">
        <div className=" flex flex-col my-10 max-md:w-[80%] min-w-[40%] ">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              onChange={(e) => {
                setInputCity(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  getWeatherDetails(Inputcity);
                  setInputCity("");
                }
              }}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Location"
              required
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                getWeatherDetails(Inputcity);
                setInputCity("");
              }}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
        <ShowWeather data={data} />
      </div>
    </div>
  );
};

export default App;
