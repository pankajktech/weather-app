import React from "react";

const ShowWeather = (props) => {
  return (
    <div className=" p-5 flex flex-col  justify-center items-center h-[600px] w-[100%]">
      <div className="flex justify-around bg-slate-50 p-5 rounded-md w-[95%] md:w-[600px]">
        <div>
          <h3 className="text-4xl font-bold md:text-7xl my-4">
            {(props.data?.main?.temp - 273.15).toFixed(2)}°C
          </h3>
          <h2 className="md:text-3xl font-bold">{props.data?.name}</h2>
        </div>
        <div>
          <video
            autoPlay
            loop
            muted
            className="w-20 h-20 md:w-32 md:h-32"
            src="https://cdn-icons-mp4.flaticon.com/512/6455/6455017.mp4"
          ></video>
        </div>
      </div>
      <div className="my-5 p-2 flex justify-between bg-white rounded-md md:min-w-[600px]">
        <div className="flex items-center text-xl">
          <video
            autoPlay
            loop
            muted
            className="w-10 h-10 md:w-16 md:h-16"
            src="https://cdn-icons-mp4.flaticon.com/512/6455/6455029.mp4"
          ></video>
          {props.data?.main?.humidity}
        </div>
        <div className="flex items-center text-xl">
          <video
            autoPlay
            loop
            muted
            className="w-10 h-10 md:w-16 md:h-16"
            src="https://cdn-icons-mp4.flaticon.com/512/8793/8793355.mp4"
          ></video>
          {props.data?.wind?.speed } m/h
        </div>
        <div className="flex items-center text-xl">
          <video
            autoPlay
            loop
            muted
            className="w-10 h-10 md:w-16 md:h-16"
            src="https://cdn-icons-mp4.flaticon.com/512/6455/6455024.mp4"
          ></video>
          {props.data?.weather && props.data?.weather[0]?.description}
        </div>
      </div>
    </div>
  );
};

export default ShowWeather;
