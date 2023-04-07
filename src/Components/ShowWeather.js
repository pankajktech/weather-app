import React from "react";

const ShowWeather = (props) => {
  return (
    <div className="p-5 flex flex-col  justify-center items-center h-[600px] w-[100%]">
      <div className="flex max-md:flex-col-reverse items-center md:justify-around bg-white p-5 rounded-md w-[90%] md:w-[700px]">
        <div>
          <h3 className="text-6xl font-bold md:text-7xl my-4">
            {(props.data?.main?.temp - 273.15).toFixed(2)}°C
          </h3>
          <h2 className="text-3xl  text-slate-800 opacity-80">
            {props.data?.name}
          </h2>
        </div>
        <div>
          <video
            autoPlay
            loop
            muted
            className="w-32 h-32"
            src="https://cdn-icons-mp4.flaticon.com/512/6455/6455017.mp4"
          ></video>
        </div>
      </div>
      <div className="my-5 p-2 flex max-md:flex-col min-w-[90%] items-center md:justify-between bg-white rounded-md md:min-w-[700px]">
        <div className=" max-md:my-3 flex items-center text-xl">
          <video
            autoPlay
            loop
            muted
            className="w-10 h-10 md:w-16 md:h-16 mr-2"
            src="https://cdn-icons-mp4.flaticon.com/512/6455/6455029.mp4"
          ></video>
          <div className="ml-3">
            <h1 className="text-sm text-slate-800 opacity-80">humidity</h1>

            {props.data?.main?.humidity}
          </div>
        </div>
        <div className=" max-md:my-3 flex items-center text-xl">
          <video
            autoPlay
            loop
            muted
            className="w-10 h-10 md:w-16 md:h-16"
            src="https://cdn-icons-mp4.flaticon.com/512/8793/8793355.mp4"
          ></video>

          <div className="ml-3">
            <h1 className="text-sm text-slate-800 opacity-80">Wind Speed</h1>
            {props.data?.wind?.speed * (3.6).toFixed(2)} km/h
          </div>
        </div>

        <div className=" max-md:my-3 flex items-center text-xl">
          <video
            autoPlay
            loop
            muted
            className="w-10 h-10 md:w-16 md:h-16"
            src="https://cdn-icons-mp4.flaticon.com/512/6455/6455024.mp4"
          ></video>
          <div className="ml-3">
            <h1 className="text-sm text-slate-800 opacity-80">Cloud</h1>

            {props.data?.weather && props.data?.weather[0]?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowWeather;
