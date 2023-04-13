import React from "react";

import sun from "../Images/sun.png";
import humidity from "../Images/humidity.png";
import wind from "../Images/wind.png";
import cloud from "../Images/cloud.png";

const ShowWeather = (props) => {
  return (
    <div className="p-5 flex flex-col  justify-center items-center h-[600px] w-[100%]">
      <div className="flex max-md:flex-col-reverse items-center md:justify-around bg-slate-900 p-5 rounded-md w-[90%] md:w-[700px] md:h-72 backdrop-blur-sm bg-opacity-50">
        <div>
          <h3 className="text-6xl font-bold md:text-7xl my-4 text-white">
            {(props.data?.main?.temp - 273.15).toFixed(2)}°C
          </h3>
          <h2 className="text-3xl  text-slate-100 opacity-80">
            {props.data?.name}
          </h2>
        </div>
        <div>
          <img src={sun} alt="weather icon" className="h-40" />
        </div>
      </div>
      <div className="my-5 p-2 flex max-md:flex-col md:h-40 min-w-[90%] items-center md:justify-around bg-slate-900 rounded-md md:min-w-[700px] backdrop-blur-sm bg-opacity-50 text-white">
        <div className=" max-md:my-3 flex items-center text-xl">
          <img
            src={humidity}
            alt="humidity"
            className="w-10 h-10 md:w-16 md:h-16"
          />
          <div className="ml-3">
            <h1 className="text-sm text-slate-100 opacity-80">humidity</h1>

            {props.data?.main?.humidity}
          </div>
        </div>
        <div className=" max-md:my-3 flex items-center text-xl">
          <img
            src={wind}
            alt="humidity"
            className="w-10 h-10 md:w-16 md:h-16"
          />

          <div className="ml-3">
            <h1 className="text-sm text-slate-100 opacity-80">Wind Speed</h1>
            {(props.data?.wind?.speed * 3.16).toFixed(2)} Km/h
          </div>
        </div>

        <div className=" max-md:my-3 flex items-center text-xl">
          <img
            src={cloud}
            alt="humidity"
            className="w-10 h-10 md:w-16 md:h-16"
          />
          <div className="ml-3">
            <h1 className="text-sm text-slate-100 opacity-80">Cloud</h1>

            {props.data?.weather && props.data?.weather[0]?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowWeather;
