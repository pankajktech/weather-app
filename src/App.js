import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const api_key = "d32406cb845b9b835a54dc54295c7efc";
  const [Inputcity, setInputCity] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    getWeatherDetails("Rajkot");
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

  const handleChangeInput = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(Inputcity);
  };

  return (
    <div className="bg-[url(https://image.lexica.art/full_jpg/57c1e3fa-1d32-461e-a03a-f2f4487985b5)]  bg-no-repeat bg-cover">
      <div className=" backdrop-blur-md  flex flex-col md:flex-row justify-around items-center min-h-screen">
        <div className=" flex flex-col ">
          <input
            type="text"
            placeholder="Enter City"
            className=" w-80 lg:w-[500px] ring-1 p-2 m-auto rounded-md"
            value={Inputcity}
            onChange={handleChangeInput}
          />
          <button
            type="submit"
            className="bg-teal-600 text-white rounded-md  w-80 lg:w-[500px] p-2 m-auto mt-5"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="bg-white  backdrop-blur-sm rounded-md p-5 flex flex-col  justify-center items-center h-96 w-96 lg:w-[500px]">
          <video
            src="https://cdn-icons-mp4.flaticon.com/512/6455/6455053.mp4"
            autoPlay
            loop
            muted
            className="w-40 lg:h-52 h-40 lg:w-52"
          />
          <h2 className="text-3xl font-bold">{data?.name}</h2>
          <h3 className="text-2xl my-4">
            {(data?.main?.temp - 273.15).toFixed(2)}°C
          </h3>
          <h3 className="">Humadity: <span className="mx-1">{data?.main?.humidity}</span> </h3>
        </div>
      </div>
    </div>
  );
};

export default App;
